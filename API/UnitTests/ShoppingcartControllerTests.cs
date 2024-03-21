using Microsoft.AspNetCore.Mvc;
using Moq;
using SupermarketCheckoutSample.Controllers;
using SupermarketCheckoutSample.Models;
using SupermarketCheckoutSample.Services;
using Xunit;

namespace SupermarketCheckoutSample.UnitTests
{
    
    public class ShoppingcartControllerTests
    {
        [Fact]
        public void GetItems_Prices_ReturnsListOfItems()
        {
            //Arrange
            var mockIShoppingCartService = new Mock<IShoppingCartService>();
            var items = new List<Item> { 
                new Item { ItemName="A",ItemPrice=50}, 
                new Item { ItemName = "B", ItemPrice = 30 }
            };
            mockIShoppingCartService.Setup(service => service.GetItems_Prices()).Returns(items);
            var controller = new ShoppingcartController(mockIShoppingCartService.Object);

            //Act
            var result = controller.GetItems_Prices();

            //Assert
            var actionResult = Assert.IsType<OkObjectResult>(result.Result);
            var returnedItems = Assert.IsAssignableFrom<IEnumerable<Item>>(actionResult.Value);
            Assert.IsType<ActionResult<IEnumerable<Item>>>(result);
            Assert.Equal(items,returnedItems);
        }
    }
}
