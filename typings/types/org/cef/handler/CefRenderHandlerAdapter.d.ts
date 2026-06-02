import type { Point } from '../../../java/awt/Point.d.ts'
import type { Rectangle } from '../../../java/awt/Rectangle.d.ts'
import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CefBrowser } from '../../../org/cef/browser/CefBrowser.d.ts'
import type { CefDragData } from '../../../org/cef/callback/CefDragData.d.ts'
import type { CefAcceleratedPaintInfo } from '../../../org/cef/handler/CefAcceleratedPaintInfo.d.ts'
import type { CefRenderHandler } from '../../../org/cef/handler/CefRenderHandler.d.ts'
import type { CefScreenInfo } from '../../../org/cef/handler/CefScreenInfo.d.ts'
export abstract class CefRenderHandlerAdapter extends Object implements CefRenderHandler {
    constructor()
    getScreenInfo(arg0: CefBrowser, arg1: CefScreenInfo): boolean;
    getScreenPoint(arg0: CefBrowser, arg1: Point): Point;
    getViewRect(arg0: CefBrowser): Rectangle;
    onAcceleratedPaint(arg0: CefBrowser, arg1: boolean, arg2: Rectangle[], arg3: CefAcceleratedPaintInfo): void;
    onCursorChange(arg0: CefBrowser, arg1: number): boolean;
    onPaint(arg0: CefBrowser, arg1: boolean, arg2: Rectangle[], arg3: ByteBuffer, arg4: number, arg5: number): void;
    onPopupShow(arg0: CefBrowser, arg1: boolean): void;
    onPopupSize(arg0: CefBrowser, arg1: Rectangle): void;
    startDragging(arg0: CefBrowser, arg1: CefDragData, arg2: number, arg3: number, arg4: number): boolean;
    updateDragCursor(arg0: CefBrowser, arg1: number): void;
}