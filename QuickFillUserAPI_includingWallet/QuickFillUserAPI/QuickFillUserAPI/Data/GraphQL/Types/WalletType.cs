using GraphQL.Types;
using QuickFillUserAPI.Data.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;



namespace QuickFillUserAPI.Data.GraphQL.Types
{
    public class WalletType : ObjectGraphType<Wallet>
    {
        public WalletType()
        {
            Field(t => t.Wid);
            Field(t => t.Email);
            Field(t => t.Cash);
        }

    }
}
