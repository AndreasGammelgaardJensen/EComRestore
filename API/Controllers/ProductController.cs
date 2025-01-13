using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace API.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class ProductController(StoreContext context) : ControllerBase
	{
		private StoreContext _context { get; } = context;

		// GET: api/<ProductController>
		[HttpGet]
		public async Task<ActionResult<List<Product>>> GetProducts()
		{
			return await _context.Products.ToListAsync();
		}

		// GET api/<ProductController>/5
		[HttpGet("{id}")]
		public async Task<ActionResult<Product>> GetProduct(int id)
		{
			var product = await _context.Products.FindAsync(id);

			if(product is null) return NotFound();

			return product;
		}
	}
}
