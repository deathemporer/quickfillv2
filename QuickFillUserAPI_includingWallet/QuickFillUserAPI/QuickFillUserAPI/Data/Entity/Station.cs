using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace QuickFillUserAPI.Entity
{
    public partial class Station
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int Stid { get; set; }
        public string Sname { get; set; }
        public string Sloc { get; set; }
        public float Latitude { get; set; }
        public float Longitude { get; set; }
        public double Price { get; set; }
        //public bool SOpen { get; set; }
    }
}
