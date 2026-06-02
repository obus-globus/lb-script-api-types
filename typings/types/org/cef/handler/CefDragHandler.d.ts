import type { Object } from '../../../java/lang/Object.d.ts'
import type { CefBrowser } from '../../../org/cef/browser/CefBrowser.d.ts'
import type { CefDragData } from '../../../org/cef/callback/CefDragData.d.ts'
export interface CefDragHandler extends Object{
    onDragEnter(arg0: CefBrowser, arg1: CefDragData, arg2: number): boolean;
}