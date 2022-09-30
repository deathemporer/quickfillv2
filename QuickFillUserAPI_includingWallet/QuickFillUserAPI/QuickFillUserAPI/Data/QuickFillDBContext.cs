using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using QuickFillUserAPI.Data.Entity;
//using QuickFillUserAPI.Data.Entity;
using QuickFillUserAPI.Entity;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace QuickFillUserAPI.Data
{
    public partial class QuickFillDBContext : DbContext
    {

        public QuickFillDBContext()
        {
        }

        public QuickFillDBContext(DbContextOptions<QuickFillDBContext> options)
            : base(options)
        {
            this.Database.EnsureCreated();
        }

        public virtual DbSet<User> Users { get; set; }

        public virtual DbSet<Station> Station { get; set; }

        public virtual DbSet<Wallet> Wallet { get; set; }

    }
}
