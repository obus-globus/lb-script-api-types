import type { Object } from '../../../java/lang/Object.d.ts'
import type { CefBrowser } from '../../../org/cef/browser/CefBrowser.d.ts'
import type { CefFocusHandler$FocusSource } from '../../../org/cef/handler/CefFocusHandler$FocusSource.d.ts'
export interface CefFocusHandler extends Object{
    onGotFocus(arg0: CefBrowser): void;
    onSetFocus(arg0: CefBrowser, arg1: CefFocusHandler$FocusSource): boolean;
    onTakeFocus(arg0: CefBrowser, arg1: boolean): void;
}