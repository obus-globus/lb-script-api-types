import type { CefAcceleratedPaintInfo } from '../../../org/cef/handler/CefAcceleratedPaintInfo.d.ts'
export class CefAcceleratedPaintInfoLinux extends CefAcceleratedPaintInfo {
    constructor()
    constructor(arg0: number, arg1: number, arg2: number)
    modifier: number;
    plane_count: number;
    plane_fds: number[];
    plane_offsets: number[];
    plane_sizes: number[];
    plane_strides: number[];
    clone(): CefAcceleratedPaintInfoLinux;
    hasDmaBufPlanes(): boolean;
}