import type { CefAcceleratedPaintInfo } from '../../../org/cef/handler/CefAcceleratedPaintInfo.d.ts'
export class CefAcceleratedPaintInfoMac extends CefAcceleratedPaintInfo {
    constructor()
    constructor(arg0: number, arg1: number, arg2: number, arg3: number)
    shared_texture_io_surface: number;
    clone(): CefAcceleratedPaintInfoMac;
}