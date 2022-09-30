using QuickFillUserAPI.Data;
using QuickFillUserAPI.Data.Entity;
using QuickFillUserAPI.Data.GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuickFillUserAPI.Repository
{
    public class WalletRepository
    {
        public QuickFillDBContext _dbContext;

        public WalletRepository(QuickFillDBContext dbContext)
        {
            _dbContext = dbContext;
        }

        public IEnumerable<Wallet> GetWallets()
        {
            return _dbContext.Wallet;
        }

        public Wallet UpdateWallet(Wallet newWalletAmount)
        {
            Wallet oldWalletAmount = _dbContext.Wallet.Find(newWalletAmount.Email);
            if (oldWalletAmount != null)
            {
                oldWalletAmount.Wid = newWalletAmount.Wid;
                oldWalletAmount.Email = newWalletAmount.Email;
                oldWalletAmount.Cash = newWalletAmount.Cash;
            }
            _dbContext.SaveChanges();
            return newWalletAmount;
        }

    }
}
