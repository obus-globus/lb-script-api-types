import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { PointerBuffer } from '../../../org/lwjgl/PointerBuffer.d.ts'
export class EXTDeviceEnumeration extends Object {
    static eglQueryDevicesEXT(paramarg0: PointerBuffer, paramarg1: number[]): boolean;
    static eglQueryDevicesEXT(paramarg0: PointerBuffer, paramarg1: IntBuffer): boolean;
    static neglQueryDevicesEXT(paramarg0: number, paramarg1: number, paramarg2: number): number;
    constructor()
}