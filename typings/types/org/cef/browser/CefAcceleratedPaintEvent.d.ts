import type { Rectangle } from '../../../java/awt/Rectangle.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CefBrowser } from '../../../org/cef/browser/CefBrowser.d.ts'
import type { CefAcceleratedPaintInfo } from '../../../org/cef/handler/CefAcceleratedPaintInfo.d.ts'
export class CefAcceleratedPaintEvent extends Object {
    constructor(arg0: CefBrowser, arg1: boolean, arg2: Rectangle[], arg3: CefAcceleratedPaintInfo)
    readonly acceleratedPaintInfo: CefAcceleratedPaintInfo;
    readonly browser: CefBrowser;
    readonly dirtyRects: Rectangle[];
    readonly popup: boolean;
    getAcceleratedPaintInfo(): CefAcceleratedPaintInfo;
    getBrowser(): CefBrowser;
    getDirtyRects(): Rectangle[];
    getHeight(): number;
    getPopup(): boolean;
    getWidth(): number;
}