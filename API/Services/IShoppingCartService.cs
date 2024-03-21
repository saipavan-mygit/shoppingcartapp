using SupermarketCheckoutSample.Models;

namespace SupermarketCheckoutSample.Services
{
     public interface IShoppingCartService
    {
        List<Item> GetItems_Prices();
    }
}
