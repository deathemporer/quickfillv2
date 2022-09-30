using QuickFillUserAPI.Entity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace QuickFillUserAPI.Data.Entity
{
    public class Wallet
    {

        
        public int Wid { get; set; }
        [Key]
        public string Email { get; set; }
        public double Cash { get; set; }
    }
}
