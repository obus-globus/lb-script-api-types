import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AcceleratedPaintBackend } from '../../../../../net/ccbluex/liquidbounce/mcef/cef/AcceleratedPaintBackend.d.ts'
import type { AcceleratedPaintFrame } from '../../../../../net/ccbluex/liquidbounce/mcef/cef/AcceleratedPaintFrame.d.ts'
import type { CefAcceleratedPaintInfo } from '../../../../../org/cef/handler/CefAcceleratedPaintInfo.d.ts'
import type { CefAcceleratedPaintInfoLinux } from '../../../../../org/cef/handler/CefAcceleratedPaintInfoLinux.d.ts'
export class LinuxAcceleratedPaintBackend extends Object implements AcceleratedPaintBackend {
    constructor()
    accepts(arg0: CefAcceleratedPaintInfo): boolean;
    close(): void;
    importFrame(arg0: CefAcceleratedPaintInfo, arg1: number, arg2: number): AcceleratedPaintFrame;
    // private logDmaBufImport(arg0: CefAcceleratedPaintInfoLinux, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number[]): void;
}