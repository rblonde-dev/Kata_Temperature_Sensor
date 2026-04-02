using Microsoft.EntityFrameworkCore;
using SensorApi.Models;

namespace SensorApi.ApplicationDbContext
{
    public class SensorDbContext: DbContext
    {
        public SensorDbContext(DbContextOptions<SensorDbContext> options) :base(options){}

        public DbSet<Sensor> Sensors {get; set;}
    }
}