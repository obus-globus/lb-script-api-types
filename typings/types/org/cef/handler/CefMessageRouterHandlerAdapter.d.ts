import type { CefBrowser } from '../../../org/cef/browser/CefBrowser.d.ts'
import type { CefFrame } from '../../../org/cef/browser/CefFrame.d.ts'
import type { CefNativeAdapter } from '../../../org/cef/callback/CefNativeAdapter.d.ts'
import type { CefQueryCallback } from '../../../org/cef/callback/CefQueryCallback.d.ts'
import type { CefMessageRouterHandler } from '../../../org/cef/handler/CefMessageRouterHandler.d.ts'
export abstract class CefMessageRouterHandlerAdapter extends CefNativeAdapter implements CefMessageRouterHandler {
    constructor()
    onQuery(arg0: CefBrowser, arg1: CefFrame, arg2: number, arg3: string, arg4: boolean, arg5: CefQueryCallback): boolean;
    onQueryCanceled(arg0: CefBrowser, arg1: CefFrame, arg2: number): void;
}