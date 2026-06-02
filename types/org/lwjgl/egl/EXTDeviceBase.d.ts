import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { PointerBuffer } from '../../../org/lwjgl/PointerBuffer.d.ts'
export class EXTDeviceBase extends Object {
    static EGL_BAD_DEVICE_EXT: number;
    static EGL_DEVICE_EXT: number;
    static EGL_NO_DEVICE_EXT: number;
    static eglQueryDeviceAttribEXT(paramarg0: number, paramarg1: number, paramarg2: PointerBuffer): boolean;
    static eglQueryDeviceStringEXT(paramarg0: number, paramarg1: number): string;
    static eglQueryDevicesEXT(paramarg0: PointerBuffer, paramarg1: number[]): boolean;
    static eglQueryDevicesEXT(paramarg0: PointerBuffer, paramarg1: IntBuffer): boolean;
    static eglQueryDisplayAttribEXT(paramarg0: number, paramarg1: number, paramarg2: PointerBuffer): boolean;
    static neglQueryDeviceAttribEXT(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static neglQueryDeviceStringEXT(paramarg0: number, paramarg1: number): number;
    static neglQueryDevicesEXT(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static neglQueryDisplayAttribEXT(paramarg0: number, paramarg1: number, paramarg2: number): number;
    constructor()
}