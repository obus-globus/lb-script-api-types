import type { Object } from '../../../java/lang/Object.d.ts'
import type { CefBrowser } from '../../../org/cef/browser/CefBrowser.d.ts'
export interface CefDevToolsMessageObserver extends Object{
    onDevToolsEvent(arg0: CefBrowser, arg1: string, arg2: string): void;
    onDevToolsMethodResult(arg0: CefBrowser, arg1: number, arg2: boolean, arg3: string): void;
}