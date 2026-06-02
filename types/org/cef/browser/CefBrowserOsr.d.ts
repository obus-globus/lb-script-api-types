import type { Point } from '../../../java/awt/Point.d.ts'
import type { Rectangle } from '../../../java/awt/Rectangle.d.ts'
import type { BufferedImage } from '../../../java/awt/image/BufferedImage.d.ts'
import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { CompletableFuture } from '../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { CefBrowserSettings } from '../../../org/cef/CefBrowserSettings.d.ts'
import type { CefClient } from '../../../org/cef/CefClient.d.ts'
import type { CefAcceleratedPaintEvent } from '../../../org/cef/browser/CefAcceleratedPaintEvent.d.ts'
import type { CefBrowser } from '../../../org/cef/browser/CefBrowser.d.ts'
import type { CefBrowser_N } from '../../../org/cef/browser/CefBrowser_N.d.ts'
import type { CefPaintEvent } from '../../../org/cef/browser/CefPaintEvent.d.ts'
import type { CefRequestContext } from '../../../org/cef/browser/CefRequestContext.d.ts'
import type { CefDragData } from '../../../org/cef/callback/CefDragData.d.ts'
import type { CefAcceleratedPaintInfo } from '../../../org/cef/handler/CefAcceleratedPaintInfo.d.ts'
import type { CefRenderHandler } from '../../../org/cef/handler/CefRenderHandler.d.ts'
import type { CefScreenInfo } from '../../../org/cef/handler/CefScreenInfo.d.ts'
export class CefBrowserOsr extends CefBrowser_N implements CefRenderHandler {
    constructor(arg0: CefClient, arg1: string, arg2: boolean, arg3: CefRequestContext, arg4: CefBrowserSettings)
    private constructor(arg0: CefClient, arg1: string, arg2: boolean, arg3: CefRequestContext, arg4: CefBrowserOsr, arg5: Point, arg6: CefBrowserSettings)
    // private browser_rect_: Rectangle;
    // private depth: number;
    // private depth_per_component: number;
    // private isTransparent_: boolean;
    // private justCreated_: boolean;
    // private onAcceleratedPaintListeners: (param0: CefAcceleratedPaintEvent) => void[];
    // private onPaintListeners: (param0: CefPaintEvent) => void[];
    // private scaleFactor_: number;
    // private screenPoint_: Point;
    addOnAcceleratedPaintListener(arg0: (param0: CefAcceleratedPaintEvent) => void): void;
    addOnPaintListener(arg0: (param0: CefPaintEvent) => void): void;
    // private createBrowserIfRequired(arg0: boolean): void;
    createDevToolsBrowser(arg0: CefClient, arg1: string, arg2: CefRequestContext, arg3: CefBrowser_N, arg4: Point): CefBrowser_N;
    createImmediately(): void;
    createScreenshot(arg0: boolean): CompletableFuture<BufferedImage>;
    getRenderHandler(): CefRenderHandler;
    getScreenInfo(arg0: CefBrowser, arg1: CefScreenInfo): boolean;
    getScreenPoint(arg0: CefBrowser, arg1: Point): Point;
    getViewRect(arg0: CefBrowser): Rectangle;
    // private notifyAfterParentChanged(): void;
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