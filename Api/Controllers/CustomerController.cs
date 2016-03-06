namespace Api.Controllers
{
    using System.Collections.Generic;
    using System.Web.Http;
    using System.Web.Http.Cors;

    using Dto;

    
    public class CustomerController : ApiController
    {
        [EnableCors("*", "*", "*")]
        [Route("api/customer/{id}")]
        public IHttpActionResult Get(int id)
        {
            return
                Ok(
                    new CustomerDto
                        {
                            Id = id,
                            AddressLine1 = "address1",
                            AddressLine2 = "address2",
                            AddressLine3 = "address3",
                            AddressLine4 = "address4",
                            AddressLine5 = "address5",
                            PostCode = "postcode",
                            FirstName = "sean",
                            LastName = "rogers",
                            Policies =
                                new List<PolicyDto>
                                    {
                                        new PolicyDto
                                            {
                                                Id = 1,
                                                Name = "Policy1",
                                                OutstandingAmount = 1000.00M
                                            },
                                        new PolicyDto
                                            {
                                                Id = 2,
                                                Name = "Policy2",
                                                OutstandingAmount = 2000.00M
                                            },
                                        new PolicyDto
                                            {
                                                Id = 3,
                                                Name = "Policy3",
                                                OutstandingAmount = 3000.00M
                                            },
                                    }
                        });
        }
    }
}