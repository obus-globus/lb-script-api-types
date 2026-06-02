import type { Object } from '../../../java/lang/Object.d.ts'
import type { CefBrowser } from '../../../org/cef/browser/CefBrowser.d.ts'
import type { CefFrame } from '../../../org/cef/browser/CefFrame.d.ts'
import type { CefResourceRequestHandler } from '../../../org/cef/handler/CefResourceRequestHandler.d.ts'
import type { BoolRef } from '../../../org/cef/misc/BoolRef.d.ts'
import type { CefRequest } from '../../../org/cef/network/CefRequest.d.ts'
export interface CefRequestContextHandler extends Object{
    getResourceRequestHandler(arg0: CefBrowser, arg1: CefFrame, arg2: CefRequest, arg3: boolean, arg4: boolean, arg5: string, arg6: BoolRef): CefResourceRequestHandler;
}