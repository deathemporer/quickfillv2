using GraphQL.Types;
using QuickFillUserAPI.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuickFillUserAPI.Data.GraphQL.Types
{
    public class StationType : ObjectGraphType<Station>
    {
        public StationType()
        {
            Field(t => t.Stid);
            Field(t => t.Sname);
            Field(t => t.Sloc);
            Field(t => t.Latitude);
            Field(t => t.Longitude);
            Field(t => t.Price);
            //Field(t => t.SOpen);
        }

    }
}
