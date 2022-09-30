using GraphQL;
using GraphQL.Types;
using QuickFillUserAPI.Data.Entity;
//using QuickFillUserAPI.Data.Entity;
using QuickFillUserAPI.Data.GraphQL.Types;
using QuickFillUserAPI.Entity;
using QuickFillUserAPI.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuickFillUserAPI.Data.GraphQL
{
    public class QuickFillMutations:ObjectGraphType
    {
        public QuickFillMutations(UserRepository userRepository, StationRepository stationRepository, WalletRepository walletRepository)
        {
            Field<UserType>(
            "createUser",
            arguments: new QueryArguments(new QueryArgument<NonNullGraphType<CreateNewUserInputType>> { Name = "usercreate" }),
            resolve: context =>
            {
                var user = context.GetArgument<User>("usercreate");
                return userRepository.AddUser(user);
            });


            Field<StationType>(
                "createStation",
                arguments: new QueryArguments(new QueryArgument<NonNullGraphType<StationInputType>> { Name = "station" }),
                resolve: context =>
                {
                    var station = context.GetArgument<Station>("station");
                    return stationRepository.AddStation(station);
                });

            Field<StationType>(
                "updateStation",
                arguments: new QueryArguments(new QueryArgument<NonNullGraphType<StationInputType>> { Name = "station" }),
                resolve: context =>
                {
                    var station = context.GetArgument<Station>("station");
                    return stationRepository.UpdateStation(station);
                });

            Field<StationType>(
                "deleteStation",
                arguments: new QueryArguments(new QueryArgument<NonNullGraphType<IntGraphType>> { Name = "id" }),
                resolve: context =>
                {
                    var station = context.GetArgument<int>("id");
                    return stationRepository.DeleteStation(station);
                });

            Field<WalletType>(
                "updateWallet",
                arguments: new QueryArguments(new QueryArgument<NonNullGraphType<WalletInputType>> { Name = "wallet" }),
                resolve: context =>
                {
                    var wallet = context.GetArgument<Wallet>("wallet");
                    return walletRepository.UpdateWallet(wallet);
                });
        }
    }
}
