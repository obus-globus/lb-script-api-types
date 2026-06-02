import type { Object } from '../../../java/lang/Object.d.ts'
import type { CefBrowser } from '../../../org/cef/browser/CefBrowser.d.ts'
import type { CefFrame } from '../../../org/cef/browser/CefFrame.d.ts'
import type { CefCookieAccessFilter } from '../../../org/cef/handler/CefCookieAccessFilter.d.ts'
import type { CefCookie } from '../../../org/cef/network/CefCookie.d.ts'
import type { CefRequest } from '../../../org/cef/network/CefRequest.d.ts'
import type { CefResponse } from '../../../org/cef/network/CefResponse.d.ts'
export abstract class CefCookieAccessFilterAdapter extends Object implements CefCookieAccessFilter {
    constructor()
    canSaveCookie(arg0: CefBrowser, arg1: CefFrame, arg2: CefRequest, arg3: CefResponse, arg4: CefCookie): boolean;
    canSendCookie(arg0: CefBrowser, arg1: CefFrame, arg2: CefRequest, arg3: CefCookie): boolean;
}