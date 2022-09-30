using GraphQL.Types;
//using QuickFillUserAPI.Data.Entity;
using QuickFillUserAPI.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuickFillUserAPI.Data.GraphQL.Types
{
    public class UserType : ObjectGraphType<User>
    {
        public UserType()
        {
            Field(t => t.Id);
            Field(t => t.Email);
            Field(t => t.Password);
            Field(t => t.Username);
        }
    }
}
