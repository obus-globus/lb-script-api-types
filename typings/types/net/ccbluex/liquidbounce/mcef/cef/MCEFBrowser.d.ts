import type { Rectangle } from '../../../../../java/awt/Rectangle.d.ts'
import type { ByteBuffer } from '../../../../../java/nio/ByteBuffer.d.ts'
import type { MCEFBrowserSettings } from '../../../../../net/ccbluex/liquidbounce/mcef/cef/MCEFBrowserSettings.d.ts'
import type { MCEFClient } from '../../../../../net/ccbluex/liquidbounce/mcef/cef/MCEFClient.d.ts'
import type { MCEFDragContext } from '../../../../../net/ccbluex/liquidbounce/mcef/cef/MCEFDragContext.d.ts'
import type { MCEFRenderer } from '../../../../../net/ccbluex/liquidbounce/mcef/cef/MCEFRenderer.d.ts'
import type { MCEFCursorChangeListener } from '../../../../../net/ccbluex/liquidbounce/mcef/listeners/MCEFCursorChangeListener.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { CefBrowser } from '../../../../../org/cef/browser/CefBrowser.d.ts'
import type { CefBrowserOsr } from '../../../../../org/cef/browser/CefBrowserOsr.d.ts'
import type { CefDragData } from '../../../../../org/cef/callback/CefDragData.d.ts'
import type { CefAcceleratedPaintInfo } from '../../../../../org/cef/handler/CefAcceleratedPaintInfo.d.ts'
import type { CefCursorType } from '../../../../../org/cef/misc/CefCursorType.d.ts'
export class MCEFBrowser extends CefBrowserOsr {
    constructor(arg0: MCEFClient, arg1: string, arg2: boolean, arg3: MCEFBrowserSettings)
    // private btnMask: number;
    // private clicks: number;
    readonly cursorChangeListener: (param0: number) => void;
    readonly dragContext: MCEFDragContext;
    // private isMacOs: boolean;
    // private isWindows: boolean;
    // private lastClickTime: number;
    // private lastHeight: number;
    // private lastWidth: number;
    // private mouseButton: number;
    // private popupDrawn: boolean;
    // private popupGraphics: ByteBuffer;
    // private popupSize: Rectangle;
    readonly renderer: MCEFRenderer;
    // private showPopup: boolean;
    cancelDrag(): void;
    clear(): void;
    close(): void;
    finalize(): void;
    finishDragging(arg0: number, arg1: number): void;
    getCursorChangeListener(): (param0: number) => void;
    getDragContext(): MCEFDragContext;
    getRenderer(): MCEFRenderer;
    getTextureLocation(): Identifier;
    isTextureReady(): boolean;
    onAcceleratedPaint(arg0: CefBrowser, arg1: boolean, arg2: Rectangle[], arg3: CefAcceleratedPaintInfo): void;
    onCursorChange(arg0: CefBrowser, arg1: number): boolean;
    onPaint(arg0: CefBrowser, arg1: boolean, arg2: Rectangle[], arg3: ByteBuffer, arg4: number, arg5: number): void;
    onPopupShow(arg0: CefBrowser, arg1: boolean): void;
    onPopupSize(arg0: CefBrowser, arg1: Rectangle): void;
    resize(arg0: number, arg1: number): void;
    sendKeyPress(arg0: number, arg1: number, arg2: number): void;
    sendKeyRelease(arg0: number, arg1: number, arg2: number): void;
    sendKeyTyped(arg0: string, arg1: number): void;
    sendMouseMove(arg0: number, arg1: number): void;
    sendMousePress(arg0: number, arg1: number, arg2: number): void;
    sendMouseRelease(arg0: number, arg1: number, arg2: number): void;
    sendMouseWheel(arg0: number, arg1: number, arg2: number): void;
    setCursor(arg0: CefCursorType): void;
    setCursorChangeListener(arg0: (param0: number) => void): void;
    startDragging(arg0: CefBrowser, arg1: CefDragData, arg2: number, arg3: number, arg4: number): boolean;
    startDragging(arg0: CefDragData, arg1: number, arg2: number, arg3: number): void;
    // private swapButton(arg0: number): number;
    updateDragCursor(arg0: CefBrowser, arg1: number): void;
}