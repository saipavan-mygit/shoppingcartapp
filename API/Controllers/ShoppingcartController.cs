using Microsoft.AspNetCore.Mvc;
using SupermarketCheckoutSample.Models;
using SupermarketCheckoutSample.Services;

namespace SupermarketCheckoutSample.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ShoppingcartController : ControllerBase
    {

        private readonly IShoppingCartService _shoppingCartService;

        public  ShoppingcartController(IShoppingCartService shoppingCartService)
        {
            _shoppingCartService = shoppingCartService;
        }

        [HttpGet]
        [Route("items-prices")]
        public ActionResult<IEnumerable<Item>> GetItems_Prices()
        {
           var items= _shoppingCartService.GetItems_Prices();
            return Ok(items);
        }
    }
}
