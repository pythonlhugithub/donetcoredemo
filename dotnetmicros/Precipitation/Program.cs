using DOTNETMicros.Precipitation.DataAccess;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

// builder.Services.AddControllers();
// // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
// builder.Services.AddEndpointsApiExplorer();
// builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
// if (app.Environment.IsDevelopment())
// {
//     app.UseSwagger();
//     app.UseSwaggerUI();
// }

// app.UseHttpsRedirection();

// app.UseAuthorization();

// app.MapControllers();

app.MapGet("/observation/{zip}", async(string zip, [FromQuery] int? days, PreciDbContext pre)=>{


if(days==null||days<1||days>30){
    return Results.BadRequest("please provide days between 1 to 30"); //"" not entire db info
}
var startDate=DateTime.UtcNow-TimeSpan.FromDays(days.Value);
var results=await pre.precipitation.Where(p=>p.ZipCOde==zip&&p.CreatedOn>startDate).ToListAsync();
     return Results.Ok(results);
}

); //dotnet listen on observation/service

app.Run();
