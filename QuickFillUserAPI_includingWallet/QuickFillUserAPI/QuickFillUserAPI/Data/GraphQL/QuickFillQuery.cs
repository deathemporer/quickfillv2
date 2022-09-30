using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GraphQL;
using GraphQL.Types;
using QuickFillUserAPI.Data.Entity;
using QuickFillUserAPI.Data.GraphQL.Types;
using QuickFillUserAPI.Entity;
using QuickFillUserAPI.Repository;

namespace QuickFillUserAPI.Data.GraphQL
{
    public class QuickFillQuery: ObjectGraphType
    {
        public QuickFillQuery(UserRepository userRepository, StationRepository stationRepository, WalletRepository walletRepository)
        {
            Field<BooleanGraphType>(
            "login",
            arguments: new QueryArguments(new QueryArgument<NonNullGraphType<UserInputType>> { Name = "user" }),
            resolve: context =>
            {
                var user = context.GetArgument<User>("user");
                return userRepository.login(user.Email, user.Password);
            });

            Field<ListGraphType<UserType>>(
                "getID",
                arguments: new QueryArguments(new QueryArgument<NonNullGraphType<StringGraphType>> { Name = "email" }),
                resolve: context =>
                {
                   var mailid = context.GetArgument<string>("email");
                   return userRepository.GetUserID(mailid);
                }
                );

            Field<ListGraphType<StationType>>(
                "stations",
                resolve: context => stationRepository.GetStations()
                );


            Field<ListGraphType<StationType>>(
                "station",
                resolve: context => stationRepository.GetStations()
                );

            Field<ListGraphType<StationType>>(
               "stationsById",
               arguments: new QueryArguments(new QueryArgument<NonNullGraphType<IntGraphType>> { Name = "stid" }),
               resolve: context =>
               {
                   var id = context.GetArgument<int>("stid");
                   return stationRepository.GetStationsById(id);
               }

               );
            Field<ListGraphType<StationType>>(
               "stationsByName",
               arguments: new QueryArguments(new QueryArgument<NonNullGraphType<StringGraphType>> { Name = "sname" }),
               resolve: context =>
               {
                   var name = context.GetArgument<string>("sname");
                   return stationRepository.GetStationsByName(name);
               }

               );

            /*Field<ListGraphType<WalletType>>(
                "wallets",
                resolve: context => walletRepository.GetWalletDetails()
                );*/
            
            Field<ListGraphType<WalletType>>(
                "wallet",
                resolve: context => walletRepository.GetWallets()
                );

        }
    }
}
