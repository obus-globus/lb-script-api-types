import type { Point } from '../../../java/awt/Point.d.ts'
import type { Rectangle } from '../../../java/awt/Rectangle.d.ts'
import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CefAcceleratedPaintEvent } from '../../../org/cef/browser/CefAcceleratedPaintEvent.d.ts'
import type { CefBrowser } from '../../../org/cef/browser/CefBrowser.d.ts'
import type { CefPaintEvent } from '../../../org/cef/browser/CefPaintEvent.d.ts'
import type { CefDragData } from '../../../org/cef/callback/CefDragData.d.ts'
import type { CefAcceleratedPaintInfo } from '../../../org/cef/handler/CefAcceleratedPaintInfo.d.ts'
import type { CefScreenInfo } from '../../../org/cef/handler/CefScreenInfo.d.ts'
export interface CefRenderHandler extends Object{
    addOnAcceleratedPaintListener(arg0: (param0: CefAcceleratedPaintEvent) => void): void;
    addOnPaintListener(arg0: (param0: CefPaintEvent) => void): void;
    getScreenInfo(arg0: CefBrowser, arg1: CefScreenInfo): boolean;
    getScreenPoint(arg0: CefBrowser, arg1: Point): Point;
    getViewRect(arg0: CefBrowser): Rectangle;
    onAcceleratedPaint(arg0: CefBrowser, arg1: boolean, arg2: Rectangle[], arg3: CefAcceleratedPaintInfo): void;
    onCursorChange(arg0: CefBrowser, arg1: number): boolean;
    onPaint(arg0: CefBrowser, arg1: boolean, arg2: Rectangle[], arg3: ByteBuffer, arg4: number, arg5: number): void;
    onPopupShow(arg0: CefBrowser, arg1: boolean): void;
    onPopupSize(arg0: CefBrowser, arg1: Rectangle): void;
    removeOnAcceleratedPaintListener(arg0: (param0: CefAcceleratedPaintEvent) => void): void;
    removeOnPaintListener(arg0: (param0: CefPaintEvent) => void): void;
    setOnAcceleratedPaintListener(arg0: (param0: CefAcceleratedPaintEvent) => void): void;
    setOnPaintListener(arg0: (param0: CefPaintEvent) => void): void;
    startDragging(arg0: CefBrowser, arg1: CefDragData, arg2: number, arg3: number, arg4: number): boolean;
    updateDragCursor(arg0: CefBrowser, arg1: number): void;
}