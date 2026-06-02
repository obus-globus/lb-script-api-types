import type { AutoCloseable } from '../../../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AcceleratedPaintFrame } from '../../../../../net/ccbluex/liquidbounce/mcef/cef/AcceleratedPaintFrame.d.ts'
import type { CefAcceleratedPaintInfo } from '../../../../../org/cef/handler/CefAcceleratedPaintInfo.d.ts'
export interface AcceleratedPaintBackend extends AutoCloseable, Object{
    accepts(arg0: CefAcceleratedPaintInfo): boolean;
    close(): void;
    importFrame(arg0: CefAcceleratedPaintInfo, arg1: number, arg2: number): AcceleratedPaintFrame;
}