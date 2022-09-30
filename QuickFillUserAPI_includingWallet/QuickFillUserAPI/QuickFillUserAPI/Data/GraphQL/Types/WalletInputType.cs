using GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace QuickFillUserAPI.Data.GraphQL.Types
{
    public class WalletInputType : InputObjectGraphType
    {
        public WalletInputType()
        {
            Name = "walletInput";
            Field<NonNullGraphType<IntGraphType>>("wid");
            Field<NonNullGraphType<StringGraphType>>("email");
            Field<NonNullGraphType<FloatGraphType>>("cash");
        }
    }
}






