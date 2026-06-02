import type { CefAcceleratedPaintInfo } from '../../../org/cef/handler/CefAcceleratedPaintInfo.d.ts'
export class CefAcceleratedPaintInfoWin extends CefAcceleratedPaintInfo {
    constructor()
    constructor(arg0: number, arg1: number, arg2: number, arg3: number)
    shared_texture_handle: number;
    clone(): CefAcceleratedPaintInfoWin;
}