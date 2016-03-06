namespace Api.Dto
{
    using System.Collections.Generic;

    public class CustomerDto
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string AddressLine1 { get; set; }
        public string AddressLine2 { get; set; }
        public string AddressLine3 { get; set; }
        public string AddressLine4 { get; set; }
        public string AddressLine5 { get; set; }
        public string PostCode { get; set; }

        public IEnumerable<PolicyDto> Policies { get; set; }
    }
}