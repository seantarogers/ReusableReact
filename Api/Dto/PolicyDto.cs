namespace Api.Dto
{
    public class PolicyDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Insurer { get; set; }
        public decimal OutstandingAmount { get; set; }
    }
}