import type { Object } from '../../../java/lang/Object.d.ts'
import type { CefBrowser } from '../../../org/cef/browser/CefBrowser.d.ts'
import type { CefFrame } from '../../../org/cef/browser/CefFrame.d.ts'
import type { CefResourceHandler } from '../../../org/cef/handler/CefResourceHandler.d.ts'
import type { CefRequest } from '../../../org/cef/network/CefRequest.d.ts'
export interface CefSchemeHandlerFactory extends Object{
    create(arg0: CefBrowser, arg1: CefFrame, arg2: string, arg3: CefRequest): CefResourceHandler;
}