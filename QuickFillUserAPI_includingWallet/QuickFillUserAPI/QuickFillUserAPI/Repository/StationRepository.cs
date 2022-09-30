using QuickFillUserAPI.Data;
using QuickFillUserAPI.Data.Entity;
using QuickFillUserAPI.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuickFillUserAPI.Repository
{
    public class StationRepository
    {
        public QuickFillDBContext _dbContext;

        public StationRepository(QuickFillDBContext dbContext)
        {
            _dbContext = dbContext;
        }

        public IEnumerable<Station> GetStations()
        {
            return _dbContext.Station;
        }

        public IEnumerable<Station> GetStationsById(int id)
        {
            return _dbContext.Station.Where(i => i.Stid == id);
        }

        public IEnumerable<Station> GetStationsByName(string name)
        {
            return _dbContext.Station.Where(i => i.Sname == name);
        }

        public Station AddStation(Station station)
        {
            _dbContext.Station.Add(station);
            _dbContext.SaveChanges();
            return station;
        }

        public Station UpdateStation(Station objstation)
        {
            Station existingStation = _dbContext.Station.Find(objstation.Stid);
            if (existingStation != null)
            {
                existingStation.Sname = objstation.Sname;
                existingStation.Sloc = objstation.Sloc;
                existingStation.Latitude = objstation.Latitude;
                existingStation.Longitude = objstation.Longitude;
                existingStation.Price = objstation.Price;
            }
            _dbContext.SaveChanges();
            return objstation;
        }

        public Station DeleteStation(int objectstation)
        {
            //Station dummy = objectstation;
            Station existingStation = _dbContext.Station.Find(objectstation);
            _dbContext.Station.Remove(existingStation);
            _dbContext.SaveChanges();
            return existingStation;
        }
    }
}
