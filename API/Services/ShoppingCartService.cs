using SupermarketCheckoutSample.Models;

namespace SupermarketCheckoutSample.Services
{
    public class ShoppingCartService : IShoppingCartService
    {
        private readonly Dictionary<string, decimal> items_prices = new Dictionary<string, decimal>
        {
            {"A",50 },
            {"B",30 },
            {"C",20 },
            {"D",15 },
        };
        public List<Item> GetItems_Prices()
        {
            var items = new List<Item>();
            foreach (var item in items_prices)
            {
                items.Add(new Item
                {
                    ItemName = item.Key,
                    ItemPrice = item.Value
                });
            }
            return items;
        }
    
    }
}
