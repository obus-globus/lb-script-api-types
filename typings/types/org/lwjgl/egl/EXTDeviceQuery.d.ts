import type { Object } from '../../../java/lang/Object.d.ts'
import type { PointerBuffer } from '../../../org/lwjgl/PointerBuffer.d.ts'
export class EXTDeviceQuery extends Object {
    static EGL_BAD_DEVICE_EXT: number;
    static EGL_DEVICE_EXT: number;
    static EGL_NO_DEVICE_EXT: number;
    static eglQueryDeviceAttribEXT(paramarg0: number, paramarg1: number, paramarg2: PointerBuffer): boolean;
    static eglQueryDeviceStringEXT(paramarg0: number, paramarg1: number): string;
    static eglQueryDisplayAttribEXT(paramarg0: number, paramarg1: number, paramarg2: PointerBuffer): boolean;
    static neglQueryDeviceAttribEXT(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static neglQueryDeviceStringEXT(paramarg0: number, paramarg1: number): number;
    static neglQueryDisplayAttribEXT(paramarg0: number, paramarg1: number, paramarg2: number): number;
    constructor()
}