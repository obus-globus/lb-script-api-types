import type { Rectangle } from '../../../java/awt/Rectangle.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CefBrowser } from '../../../org/cef/browser/CefBrowser.d.ts'
import type { CefWindowHandler } from '../../../org/cef/handler/CefWindowHandler.d.ts'
export abstract class CefWindowHandlerAdapter extends Object implements CefWindowHandler {
    constructor()
    getRect(arg0: CefBrowser): Rectangle;
    onMouseEvent(arg0: CefBrowser, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
}