import type { Object } from '../../../java/lang/Object.d.ts'
import type { CefBrowser } from '../../../org/cef/browser/CefBrowser.d.ts'
import type { CefFocusHandler } from '../../../org/cef/handler/CefFocusHandler.d.ts'
import type { CefFocusHandler$FocusSource } from '../../../org/cef/handler/CefFocusHandler$FocusSource.d.ts'
export abstract class CefFocusHandlerAdapter extends Object implements CefFocusHandler {
    constructor()
    onGotFocus(arg0: CefBrowser): void;
    onSetFocus(arg0: CefBrowser, arg1: CefFocusHandler$FocusSource): boolean;
    onTakeFocus(arg0: CefBrowser, arg1: boolean): void;
}