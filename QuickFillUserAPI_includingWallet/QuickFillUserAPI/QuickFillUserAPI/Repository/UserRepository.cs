using QuickFillUserAPI.Data;
//using QuickFillUserAPI.Data.Entity;
using QuickFillUserAPI.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuickFillUserAPI.Repository
{
    public class UserRepository
    {
        public QuickFillDBContext _dbContext;
        public UserRepository(QuickFillDBContext dbContext)
        {
            _dbContext = dbContext;
        }

        public bool login(string email, string password)
        {
            var user = this._dbContext.Users.Where(u => u.Email == email && u.Password == password).FirstOrDefault();
            return user == null ? false : true;
        }

        public IEnumerable<User> GetUserID(string email)
        {
            return _dbContext.Users.Where(i => i.Email == email);
        }

        public User AddUser(User user)
        {
            _dbContext.Users.Add(user);
            _dbContext.SaveChanges();
            return user;
        }
    }
}
