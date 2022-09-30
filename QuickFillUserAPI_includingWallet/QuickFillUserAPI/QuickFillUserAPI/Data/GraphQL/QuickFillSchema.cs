using GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuickFillUserAPI.Data.GraphQL
{
    public class QuickFillSchema : Schema
    {
        public QuickFillSchema(IServiceProvider resolver) : base(resolver)
        {
            Query = (IObjectGraphType)resolver.GetService(typeof(QuickFillQuery));
            Mutation = (IObjectGraphType)resolver.GetService(typeof(QuickFillMutations));
        }
    }
}
