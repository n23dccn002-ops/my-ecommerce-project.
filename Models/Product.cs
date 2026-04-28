namespace MyEcommerceBackend.Models
{
    public class Product
    {
        public int Id { get; set; } // Khóa chính tự tăng
        public string Name { get; set; } = string.Empty;
        public decimal Price { get; set; }
        public string Description { get; set; } = string.Empty;
    }
}