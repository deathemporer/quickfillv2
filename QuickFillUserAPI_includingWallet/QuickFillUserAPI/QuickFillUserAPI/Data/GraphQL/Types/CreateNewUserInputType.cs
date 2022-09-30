using GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuickFillUserAPI.Data.GraphQL.Types
{
    public class CreateNewUserInputType : InputObjectGraphType
    {
        public CreateNewUserInputType()
        {
            Name = "createNewUserInput";
            Field<NonNullGraphType<StringGraphType>>("email");
            Field<NonNullGraphType<StringGraphType>>("password");
            Field<NonNullGraphType<StringGraphType>>("username");
        }
    }
}
