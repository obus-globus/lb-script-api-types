import type { Object } from '../../../java/lang/Object.d.ts'
import type { BoolRef } from '../../../org/cef/misc/BoolRef.d.ts'
import type { CefCookie } from '../../../org/cef/network/CefCookie.d.ts'
export interface CefCookieVisitor extends Object{
    visit(arg0: CefCookie, arg1: number, arg2: number, arg3: BoolRef): boolean;
}