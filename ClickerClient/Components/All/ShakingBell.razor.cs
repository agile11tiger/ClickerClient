using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
namespace ClickerClient.Components.All;

public partial class ShakingBell
{
    [Inject] public IJSRuntime JS { get; set; }

    private async Task ResetBellAnimation()
    {
        await JS.InvokeVoidAsync("resetBellAnimation");
    }
}