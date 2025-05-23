﻿using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
	public class StoreContext : DbContext
	{
		public StoreContext(DbContextOptions<StoreContext> options) : base(options)
		{
		}
		public required DbSet<Product> Products { get; set; }

	}
}
