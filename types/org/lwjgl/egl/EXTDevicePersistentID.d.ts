import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class EXTDevicePersistentID extends Object {
    static EGL_DEVICE_UUID_EXT: number;
    static EGL_DRIVER_NAME_EXT: number;
    static EGL_DRIVER_UUID_EXT: number;
    static eglQueryDeviceBinaryEXT(paramarg0: number, paramarg1: number, paramarg2: ByteBuffer, paramarg3: number[]): boolean;
    static eglQueryDeviceBinaryEXT(paramarg0: number, paramarg1: number, paramarg2: ByteBuffer, paramarg3: IntBuffer): boolean;
    static neglQueryDeviceBinaryEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): number;
    constructor()
}