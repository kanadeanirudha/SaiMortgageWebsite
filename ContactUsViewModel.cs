using System.ComponentModel.DataAnnotations;

namespace SKMWebsite
{
    public class ContactUsViewModel
    {
        [Required]
        public string Name { get; set; }
        [Required]
        public string PhoneNumber { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public string Message { get; set; }
    }
}