import type { Object } from '../../../java/lang/Object.d.ts'
import type { CefBrowser } from '../../../org/cef/browser/CefBrowser.d.ts'
import type { CefFrame } from '../../../org/cef/browser/CefFrame.d.ts'
import type { CefNative } from '../../../org/cef/callback/CefNative.d.ts'
import type { CefQueryCallback } from '../../../org/cef/callback/CefQueryCallback.d.ts'
export interface CefMessageRouterHandler extends Object, CefNative{
    onQuery(arg0: CefBrowser, arg1: CefFrame, arg2: number, arg3: string, arg4: boolean, arg5: CefQueryCallback): boolean;
    onQueryCanceled(arg0: CefBrowser, arg1: CefFrame, arg2: number): void;
}