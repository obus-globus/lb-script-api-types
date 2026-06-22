import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
import type { AcceleratedPaintBackend } from '../../../../../net/ccbluex/liquidbounce/mcef/cef/AcceleratedPaintBackend.d.ts'
import type { AcceleratedPaintFrame } from '../../../../../net/ccbluex/liquidbounce/mcef/cef/AcceleratedPaintFrame.d.ts'
import type { CefAcceleratedPaintInfo } from '../../../../../org/cef/handler/CefAcceleratedPaintInfo.d.ts'
export class MacAcceleratedPaintBackend extends Object implements AcceleratedPaintBackend {
    constructor()
    // private disabled: boolean;
    // private importFailureLogged: boolean;
    // private invalidHandleLogged: boolean;
    // private missingNativeLogged: boolean;
    // private unsupportedFormatLogged: boolean;
    accepts(arg0: CefAcceleratedPaintInfo): boolean;
    close(): void;
    importFrame(arg0: CefAcceleratedPaintInfo, arg1: number, arg2: number): AcceleratedPaintFrame;
    // private importIOSurface(arg0: number, arg1: number, arg2: number): AcceleratedPaintFrame;
    // private warnImportFailureOnce(arg0: string, arg1: Throwable): void;
    // private warnInvalidHandleOnce(): void;
    // private warnUnsupportedFormatOnce(arg0: number): void;
}