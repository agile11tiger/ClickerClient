using ClickerClient.Components;
using EyEClientLib.Extensions;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;

public class Program
{
    public static async Task Main(string[] args)
    {
        var builder = WebAssemblyHostBuilder.CreateDefault(args);
        builder.RootComponents.Add<App>("#app");
        builder.AddEyEClientDependencies();
        var services = builder.Services;
        var host = builder.Build();
        await host.AddEyEClientHostDependenciesAsync();
        await host.RunAsync();
    }
}