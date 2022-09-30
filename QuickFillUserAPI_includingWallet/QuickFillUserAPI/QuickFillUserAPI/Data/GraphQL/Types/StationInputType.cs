using GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuickFillUserAPI.Data.GraphQL.Types
{
    public class StationInputType : InputObjectGraphType
    {
        public StationInputType()
        {
            Name = "stationInput";
            Field<NonNullGraphType<IntGraphType>>("stid");
            Field<NonNullGraphType<StringGraphType>>("sname");
            Field<NonNullGraphType<StringGraphType>>("sloc");
            Field<NonNullGraphType<FloatGraphType>>("latitude");
            Field<NonNullGraphType<FloatGraphType>>("longitude");
            Field<NonNullGraphType<FloatGraphType>>("price");
            //Field<NonNullGraphType<BooleanGraphType>>("s_open");
        }
    }
}


