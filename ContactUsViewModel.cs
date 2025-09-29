using System.ComponentModel.DataAnnotations;

namespace SRMWebsite
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