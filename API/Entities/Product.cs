using API.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.OpenApi;
using Microsoft.AspNetCore.Http.HttpResults;
namespace API.Entities
{
	public class Product
	{
		public int Id { get; set; }
		public required string Name { get; set; }
		public required string Description { get; set; }
		public long Price { get; set; }
		public required string PictureUrl { get; set; }
		public required string Type { get; set; }
		public required string Brand { get; set; }
		public int QuantityInStock { get; set; }

	}
}
