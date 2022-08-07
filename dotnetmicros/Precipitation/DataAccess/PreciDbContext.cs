using Microsoft.EntityFrameworkCore;

namespace DOTNETMicros.Precipitation.DataAccess{
public class PreciDbContext : DbContext  {
public PreciDbContext()
{
    
}

public PreciDbContext(DbContextOptions opts): base(opts){

}
public DbSet<Precipitation> precipitation {get;set;}

 protected override void OnModelCreating (ModelBuilder modelBuilder){
base.OnModelCreating(modelBuilder);
snakeIdentityTableNames(modelBuilder);
}

public void snakeIdentityTableNames(ModelBuilder nm){
nm.Entity<Precipitation>(b=>{b.ToTable("precipitation");});
}


protected override void OnConfiguring(DbContextOptionsBuilder options)=>
    options.UseSqlServer($"Integrated Security=SSPI;Persist Security Info=False;Initial Catalog=weatherDb;Data Source=.\\sqlexpress");



}



}