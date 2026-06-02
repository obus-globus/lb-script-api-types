import type { Object } from '../../../java/lang/Object.d.ts'
import type { CefBrowser } from '../../../org/cef/browser/CefBrowser.d.ts'
import type { CefFrame } from '../../../org/cef/browser/CefFrame.d.ts'
import type { CefContextMenuParams } from '../../../org/cef/callback/CefContextMenuParams.d.ts'
import type { CefMenuModel } from '../../../org/cef/callback/CefMenuModel.d.ts'
export interface CefContextMenuHandler extends Object{
    onBeforeContextMenu(arg0: CefBrowser, arg1: CefFrame, arg2: CefContextMenuParams, arg3: CefMenuModel): void;
    onContextMenuCommand(arg0: CefBrowser, arg1: CefFrame, arg2: CefContextMenuParams, arg3: number, arg4: number): boolean;
    onContextMenuDismissed(arg0: CefBrowser, arg1: CefFrame): void;
}