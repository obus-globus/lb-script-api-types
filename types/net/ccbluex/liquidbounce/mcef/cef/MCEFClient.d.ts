import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CefClient } from '../../../../../org/cef/CefClient.d.ts'
import type { CefSettings$LogSeverity } from '../../../../../org/cef/CefSettings$LogSeverity.d.ts'
import type { CefBrowser } from '../../../../../org/cef/browser/CefBrowser.d.ts'
import type { CefFrame } from '../../../../../org/cef/browser/CefFrame.d.ts'
import type { CefContextMenuParams } from '../../../../../org/cef/callback/CefContextMenuParams.d.ts'
import type { CefMenuModel } from '../../../../../org/cef/callback/CefMenuModel.d.ts'
import type { CefContextMenuHandler } from '../../../../../org/cef/handler/CefContextMenuHandler.d.ts'
import type { CefDisplayHandler } from '../../../../../org/cef/handler/CefDisplayHandler.d.ts'
import type { CefLoadHandler } from '../../../../../org/cef/handler/CefLoadHandler.d.ts'
import type { CefLoadHandler$ErrorCode } from '../../../../../org/cef/handler/CefLoadHandler$ErrorCode.d.ts'
import type { CefRequest$TransitionType } from '../../../../../org/cef/network/CefRequest$TransitionType.d.ts'
export class MCEFClient extends Object implements CefContextMenuHandler, CefDisplayHandler, CefLoadHandler {
    constructor(arg0: CefClient)
    // private contextMenuHandlers: CefContextMenuHandler[];
    // private displayHandlers: CefDisplayHandler[];
    readonly handle: CefClient;
    // private loadHandlers: CefLoadHandler[];
    addContextMenuHandler(arg0: CefContextMenuHandler): void;
    addDisplayHandler(arg0: CefDisplayHandler): void;
    addLoadHandler(arg0: CefLoadHandler): void;
    getHandle(): CefClient;
    onAddressChange(arg0: CefBrowser, arg1: CefFrame, arg2: string): void;
    onBeforeContextMenu(arg0: CefBrowser, arg1: CefFrame, arg2: CefContextMenuParams, arg3: CefMenuModel): void;
    onConsoleMessage(arg0: CefBrowser, arg1: CefSettings$LogSeverity, arg2: string, arg3: string, arg4: number): boolean;
    onContextMenuCommand(arg0: CefBrowser, arg1: CefFrame, arg2: CefContextMenuParams, arg3: number, arg4: number): boolean;
    onContextMenuDismissed(arg0: CefBrowser, arg1: CefFrame): void;
    onCursorChange(arg0: CefBrowser, arg1: number): boolean;
    onFullscreenModeChange(arg0: CefBrowser, arg1: boolean): void;
    onLoadEnd(arg0: CefBrowser, arg1: CefFrame, arg2: number): void;
    onLoadError(arg0: CefBrowser, arg1: CefFrame, arg2: CefLoadHandler$ErrorCode, arg3: string, arg4: string): void;
    onLoadStart(arg0: CefBrowser, arg1: CefFrame, arg2: CefRequest$TransitionType): void;
    onLoadingStateChange(arg0: CefBrowser, arg1: boolean, arg2: boolean, arg3: boolean): void;
    onStatusMessage(arg0: CefBrowser, arg1: string): void;
    onTitleChange(arg0: CefBrowser, arg1: string): void;
    onTooltip(arg0: CefBrowser, arg1: string): boolean;
}