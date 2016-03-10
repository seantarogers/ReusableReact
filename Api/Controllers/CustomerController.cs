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
            if (id == 1)
            {

                return GetFinanceProvider1CustomerDto(id);
            }

            return GetFinanceProvider2CustomerDto(id);
        }

        private IHttpActionResult GetFinanceProvider1CustomerDto(int id)
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
                            Name = "Sean Rogers",
                            Policies =
                                new List<PolicyDto>
                                    {
                                        new PolicyDto
                                            {
                                                Id = 1,
                                                Insurer = "AXA",
                                                Name = "Policy1",
                                                OutstandingAmount = 1000.00M
                                            },
                                        new PolicyDto
                                            {
                                                Id = 2,
                                                Insurer = "Zurich",
                                                Name = "Policy2",
                                                OutstandingAmount = 2000.00M
                                            },
                                        new PolicyDto
                                            {
                                                Id = 3,
                                                Name = "Policy3",
                                                Insurer = "Aviva",
                                                OutstandingAmount = 3000.00M
                                            },
                                    }
                        });
        }

        private IHttpActionResult GetFinanceProvider2CustomerDto(int id)
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
                        Name = "Sean Rogers",
                        Policies =
                                new List<PolicyDto>
                                    {
                                        new PolicyDto
                                            {
                                                Id = 1,
                                                Insurer = "ABC",
                                                Name = "Policy1",
                                                OutstandingAmount = 1000.00M
                                            },
                                        new PolicyDto
                                            {
                                                Id = 2,
                                                Insurer = "DEF",
                                                Name = "Policy2",
                                                OutstandingAmount = 2000.00M
                                            },
                                        new PolicyDto
                                            {
                                                Id = 3,
                                                Name = "Policy3",
                                                Insurer = "GHI",
                                                OutstandingAmount = 3000.00M
                                            },
                                    }
                    });
        }
    }
}