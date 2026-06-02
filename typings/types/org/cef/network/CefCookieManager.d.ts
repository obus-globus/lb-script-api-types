import type { Object } from '../../../java/lang/Object.d.ts'
import type { CefCompletionCallback } from '../../../org/cef/callback/CefCompletionCallback.d.ts'
import type { CefCookieVisitor } from '../../../org/cef/callback/CefCookieVisitor.d.ts'
import type { CefCookie } from '../../../org/cef/network/CefCookie.d.ts'
export abstract class CefCookieManager extends Object {
    static getGlobalManager(): CefCookieManager;
    constructor()
    deleteCookies(arg0: string, arg1: string): boolean;
    dispose(): void;
    finalize(): void;
    flushStore(arg0: CefCompletionCallback): boolean;
    setCookie(arg0: string, arg1: CefCookie): boolean;
    visitAllCookies(arg0: CefCookieVisitor): boolean;
    visitUrlCookies(arg0: string, arg1: boolean, arg2: CefCookieVisitor): boolean;
}