using System.Configuration;
using System.Net.Mail;
using System.Net;
using System;
using System.Web.Mvc;

namespace SRMWebsite.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Active = "home";
            return View();
        }

        public ActionResult AboutUs()
        {
            ViewBag.Active = "AboutUs";
            return View();
        }
        public ActionResult OurServices()
        {
            ViewBag.Active = "OurServices";
            return View();
        }
        public ActionResult Calculator(string loanType = null)
        {
            ViewBag.Active = "Calculator";
            loanType = string.IsNullOrEmpty(loanType) ? "home" : loanType;
            return View("~/Views/Home/Calculator.cshtml", null, loanType);
        }
        public ActionResult Downloads()
        {
            ViewBag.Active = "Downloads";
            return View();
        }
        public ActionResult Reviews()
        {
            ViewBag.Active = "Reviews";
            return View();
        }

        public ActionResult ContactUs()
        {
            ViewBag.Active = "ContactUs";
            return View();
        }

        public ActionResult FAQ()
        {
            ViewBag.Active = "FAQ";
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult SendEmail(ContactUsViewModel model)
        {
            try
            {
                if (!string.IsNullOrEmpty(Request.Form["website"]))
                {
                    // Probably spam
                    return RedirectToAction(nameof(ContactUs));
                }


                if (ModelState.IsValid)
                {
                    var senderEmail = new MailAddress(
                        ConfigurationManager.AppSettings["MailFrom"],
                        ConfigurationManager.AppSettings["MailFrom_Name"]
                    );

                    var toEmail = new MailAddress(ConfigurationManager.AppSettings["MailTo"]); // internal recipient
                    var userEmail = new MailAddress(model.Email, model.Name); // user who submitted the form
                    var password = ConfigurationManager.AppSettings["Password"];

                    var subjectToAdmin = model.Name + " wants to connect with you";
                    var subjectToUser = "Thank you for contacting Sandeep Khanna Mortgages Ltd";

                    // Email body to admin
                    string bodyToAdmin = $@"
                                            <html>
                                            <body style='font-family: Arial, sans-serif;'>
                                                <h2 style='color: #2c3e50;'>New Contact Request</h2>
                                                <table style='border-collapse: collapse; width: 100%; max-width: 600px;'>
                                            <tr>
                                                <td style='padding: 2px; width: 120px; font-weight: bold;'>Name:</td>
                                                <td style='padding: 2px;'>{model.Name}</td>
                                            </tr>
                                            <tr>
                                                <td style='padding: 2px; font-weight: bold;'>Phone:</td>
                                                <td style='padding: 2px;'>{model.PhoneNumber}</td>
                                            </tr>
                                            <tr>
                                                <td style='padding: 2px; font-weight: bold;'>Email:</td>
                                                <td style='padding: 2px;'>{model.Email}</td>
                                            </tr>
                                            <tr>
                                                <td style='padding: 2px; font-weight: bold;'>Message:</td>
                                                <td style='padding: 2px;'>{model.Message}</td>
                                            </tr>
                                        </table>

                                                <p style='margin-top: 20px;'>This message was sent from the website contact form.</p>
                                            </body>
                                            </html>";

                    // Email body to user
                    string bodyToUser = $@"
                                            <html>
                                            <body style='font-family: Arial, sans-serif;'>
                                                <h2 style='color: #2c3e50;'>Thank You for Reaching Out</h2>
                                                <p>Hi {model.Name},</p>
                                                <p>Thank you for contacting <strong>Sandeep Khanna Mortgages Ltd – Caring, Local Expert Advice</strong>. We have received your message and will get back to you as soon as possible.</p>
                                                <p>If your query is urgent, feel free to call us directly.</p>
                                                <br/>
                                                <p>Warm regards,</p>
                                                <p><strong>The SK Finance Team</strong></p>
                                            </body>
                                            </html>";

                    var smtp = new SmtpClient
                    {
                        Host = "smtp.gmail.com",
                        Port = 587,
                        EnableSsl = true,
                        DeliveryMethod = SmtpDeliveryMethod.Network,
                        UseDefaultCredentials = false,
                        Credentials = new NetworkCredential(senderEmail.Address, password)
                    };

                    // Send email to admin/support
                    using (var messageToAdmin = new MailMessage(senderEmail, toEmail)
                    {
                        Subject = subjectToAdmin,
                        Body = bodyToAdmin,
                        IsBodyHtml = true
                    })
                    {
                        smtp.Send(messageToAdmin);
                    }

                    // Send thank you email to user
                    using (var messageToUser = new MailMessage(senderEmail, userEmail)
                    {
                        Subject = subjectToUser,
                        Body = bodyToUser,
                        IsBodyHtml = true
                    })
                    {
                        smtp.Send(messageToUser);
                    }

                    TempData["success"] = "Thank you for contacting us. We’ll be in touch shortly!";
                    return RedirectToAction(nameof(ContactUs));

                }
            }
            catch (Exception ex)
            {

            }
            TempData["error"] = "Failed to connect, Kindly verify the details";
            return RedirectToAction(nameof(ContactUs));
        }
    }
}