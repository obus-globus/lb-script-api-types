import type { Object } from '../../../java/lang/Object.d.ts'
import type { CefSettings$LogSeverity } from '../../../org/cef/CefSettings$LogSeverity.d.ts'
import type { CefBrowser } from '../../../org/cef/browser/CefBrowser.d.ts'
import type { CefFrame } from '../../../org/cef/browser/CefFrame.d.ts'
import type { CefDisplayHandler } from '../../../org/cef/handler/CefDisplayHandler.d.ts'
export abstract class CefDisplayHandlerAdapter extends Object implements CefDisplayHandler {
    constructor()
    onAddressChange(arg0: CefBrowser, arg1: CefFrame, arg2: string): void;
    onConsoleMessage(arg0: CefBrowser, arg1: CefSettings$LogSeverity, arg2: string, arg3: string, arg4: number): boolean;
    onCursorChange(arg0: CefBrowser, arg1: number): boolean;
    onFullscreenModeChange(arg0: CefBrowser, arg1: boolean): void;
    onStatusMessage(arg0: CefBrowser, arg1: string): void;
    onTitleChange(arg0: CefBrowser, arg1: string): void;
    onTooltip(arg0: CefBrowser, arg1: string): boolean;
}