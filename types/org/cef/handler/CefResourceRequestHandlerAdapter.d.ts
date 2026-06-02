import type { Object } from '../../../java/lang/Object.d.ts'
import type { CefBrowser } from '../../../org/cef/browser/CefBrowser.d.ts'
import type { CefFrame } from '../../../org/cef/browser/CefFrame.d.ts'
import type { CefCookieAccessFilter } from '../../../org/cef/handler/CefCookieAccessFilter.d.ts'
import type { CefResourceHandler } from '../../../org/cef/handler/CefResourceHandler.d.ts'
import type { CefResourceRequestHandler } from '../../../org/cef/handler/CefResourceRequestHandler.d.ts'
import type { BoolRef } from '../../../org/cef/misc/BoolRef.d.ts'
import type { StringRef } from '../../../org/cef/misc/StringRef.d.ts'
import type { CefRequest } from '../../../org/cef/network/CefRequest.d.ts'
import type { CefResponse } from '../../../org/cef/network/CefResponse.d.ts'
import type { CefURLRequest$Status } from '../../../org/cef/network/CefURLRequest$Status.d.ts'
export abstract class CefResourceRequestHandlerAdapter extends Object implements CefResourceRequestHandler {
    constructor()
    getCookieAccessFilter(arg0: CefBrowser, arg1: CefFrame, arg2: CefRequest): CefCookieAccessFilter;
    getResourceHandler(arg0: CefBrowser, arg1: CefFrame, arg2: CefRequest): CefResourceHandler;
    onBeforeResourceLoad(arg0: CefBrowser, arg1: CefFrame, arg2: CefRequest): boolean;
    onProtocolExecution(arg0: CefBrowser, arg1: CefFrame, arg2: CefRequest, arg3: BoolRef): void;
    onResourceLoadComplete(arg0: CefBrowser, arg1: CefFrame, arg2: CefRequest, arg3: CefResponse, arg4: CefURLRequest$Status, arg5: number): void;
    onResourceRedirect(arg0: CefBrowser, arg1: CefFrame, arg2: CefRequest, arg3: CefResponse, arg4: StringRef): void;
    onResourceResponse(arg0: CefBrowser, arg1: CefFrame, arg2: CefRequest, arg3: CefResponse): boolean;
}