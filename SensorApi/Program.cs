using Microsoft.EntityFrameworkCore;
using SensorApi.Controllers;
using SensorApi.ApplicationDbContext;
using Microsoft.Extensions.Diagnostics.HealthChecks;
using Microsoft.AspNetCore.Diagnostics.HealthChecks;

var builder = WebApplication.CreateBuilder(args);
var configuration = builder.Configuration;
// Add services to the container.

builder.Services.AddDbContext<SensorDbContext>(options =>
    options.UseSqlite(configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddControllers();

var HealthCheckSvc = builder.Services.AddHealthChecks();

// check if backend is running
HealthCheckSvc.AddCheck(
    name: "self-live",
    check: () => HealthCheckResult.Healthy("Sensor API is running"),
    tags: new[] {"live"}
);

// check if backend can serve requests
HealthCheckSvc.AddCheck(
    name: "self-ready",
    check: () => HealthCheckResult.Healthy("Sensor API is ready to serve requests"),
    tags: new[] {"ready"}
);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddOpenApi();



var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

app.UseHealthChecks("/health", new HealthCheckOptions
{
    AllowCachingResponses = false,
    Predicate = r => r.Tags.Contains("live"),
});

app.UseHealthChecks("/ready", new HealthCheckOptions
{
    AllowCachingResponses = false,
    Predicate = r => r.Tags.Contains("ready"),
});

app.UseAuthorization();

app.MapControllers();

app.Run();

/*var summaries = new[]
{
    "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
};

app.MapGet("/weatherforecast", () =>
{
    var forecast =  Enumerable.Range(1, 5).Select(index =>
        new WeatherForecast
        (
            DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
            Random.Shared.Next(-20, 55),
            summaries[Random.Shared.Next(summaries.Length)]
        ))
        .ToArray();
    return forecast;
})
.WithName("GetWeatherForecast");

record WeatherForecast(DateOnly Date, int TemperatureC, string? Summary)
{
    public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);
}*/
