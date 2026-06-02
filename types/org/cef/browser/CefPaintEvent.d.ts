import type { Rectangle } from '../../../java/awt/Rectangle.d.ts'
import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CefBrowser } from '../../../org/cef/browser/CefBrowser.d.ts'
export class CefPaintEvent extends Object {
    constructor(arg0: CefBrowser, arg1: boolean, arg2: Rectangle[], arg3: ByteBuffer, arg4: number, arg5: number)
    readonly browser: CefBrowser;
    readonly dirtyRects: Rectangle[];
    readonly height: number;
    readonly popup: boolean;
    readonly renderedFrame: ByteBuffer;
    readonly width: number;
    getBrowser(): CefBrowser;
    getDirtyRects(): Rectangle[];
    getHeight(): number;
    getPopup(): boolean;
    getRenderedFrame(): ByteBuffer;
    getWidth(): number;
}