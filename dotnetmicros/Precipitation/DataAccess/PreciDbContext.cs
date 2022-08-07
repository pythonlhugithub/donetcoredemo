using Microsoft.EntityFrameworkCore;

namespace DOTNETMicros.Precipitation.DataAccess{
public class PreciDbContext : DbContext  {
public PreciDbContext()
{
    
}

public PreciDbContext(DbContextOptions opts): base(opts){

}
public DbSet<Precipitation> precipitation {get;set;}
 
}

}