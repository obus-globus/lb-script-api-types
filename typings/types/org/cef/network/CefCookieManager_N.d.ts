import type { CefCompletionCallback } from '../../../org/cef/callback/CefCompletionCallback.d.ts'
import type { CefCookieVisitor } from '../../../org/cef/callback/CefCookieVisitor.d.ts'
import type { CefNative } from '../../../org/cef/callback/CefNative.d.ts'
import type { CefCookie } from '../../../org/cef/network/CefCookie.d.ts'
import type { CefCookieManager } from '../../../org/cef/network/CefCookieManager.d.ts'
export class CefCookieManager_N extends CefCookieManager implements CefNative {
    static getGlobalManager(): CefCookieManager;
    constructor()
    // private N_CefHandle: number;
    // private N_DeleteCookies(arg0: number, arg1: string, arg2: string): boolean;
    // private N_Dispose(arg0: number): void;
    // private N_FlushStore(arg0: number, arg1: CefCompletionCallback): boolean;
    // private N_SetCookie(arg0: number, arg1: string, arg2: CefCookie): boolean;
    // private N_VisitAllCookies(arg0: number, arg1: CefCookieVisitor): boolean;
    // private N_VisitUrlCookies(arg0: number, arg1: string, arg2: boolean, arg3: CefCookieVisitor): boolean;
    deleteCookies(arg0: string, arg1: string): boolean;
    dispose(): void;
    flushStore(arg0: CefCompletionCallback): boolean;
    getNativeRef(arg0: string): number;
    setCookie(arg0: string, arg1: CefCookie): boolean;
    setNativeRef(arg0: string, arg1: number): void;
    visitAllCookies(arg0: CefCookieVisitor): boolean;
    visitUrlCookies(arg0: string, arg1: boolean, arg2: CefCookieVisitor): boolean;
}