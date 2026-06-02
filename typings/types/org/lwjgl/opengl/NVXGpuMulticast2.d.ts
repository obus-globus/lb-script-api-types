import type { FloatBuffer } from '../../../java/nio/FloatBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { LongBuffer } from '../../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class NVXGpuMulticast2 extends Object {
    static glAsyncCopyBufferSubDataNVX(paramarg0: number[], paramarg1: number[], paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number, paramarg7: number, paramarg8: number, paramarg9: number[], paramarg10: number[]): number;
    static glAsyncCopyBufferSubDataNVX(paramarg0: IntBuffer, paramarg1: LongBuffer, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number, paramarg7: number, paramarg8: number, paramarg9: IntBuffer, paramarg10: LongBuffer): number;
    static glAsyncCopyImageSubDataNVX(paramarg0: number[], paramarg1: number[], paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number, paramarg7: number, paramarg8: number, paramarg9: number, paramarg10: number, paramarg11: number, paramarg12: number, paramarg13: number, paramarg14: number, paramarg15: number, paramarg16: number, paramarg17: number, paramarg18: number, paramarg19: number[], paramarg20: number[]): number;
    static glAsyncCopyImageSubDataNVX(paramarg0: IntBuffer, paramarg1: LongBuffer, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number, paramarg7: number, paramarg8: number, paramarg9: number, paramarg10: number, paramarg11: number, paramarg12: number, paramarg13: number, paramarg14: number, paramarg15: number, paramarg16: number, paramarg17: number, paramarg18: number, paramarg19: IntBuffer, paramarg20: LongBuffer): number;
    static glMulticastScissorArrayvNVX(paramarg0: number, paramarg1: number, paramarg2: number[]): void;
    static glMulticastScissorArrayvNVX(paramarg0: number, paramarg1: number, paramarg2: IntBuffer): void;
    static glMulticastViewportArrayvNVX(paramarg0: number, paramarg1: number, paramarg2: number[]): void;
    static glMulticastViewportArrayvNVX(paramarg0: number, paramarg1: number, paramarg2: FloatBuffer): void;
    static glMulticastViewportPositionWScaleNVX(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static glUploadGpuMaskNVX(paramarg0: number): void;
    static nglAsyncCopyBufferSubDataNVX(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number, paramarg7: number, paramarg8: number, paramarg9: number, paramarg10: number, paramarg11: number, paramarg12: number): number;
    static nglAsyncCopyImageSubDataNVX(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number, paramarg7: number, paramarg8: number, paramarg9: number, paramarg10: number, paramarg11: number, paramarg12: number, paramarg13: number, paramarg14: number, paramarg15: number, paramarg16: number, paramarg17: number, paramarg18: number, paramarg19: number, paramarg20: number, paramarg21: number, paramarg22: number): number;
    static nglMulticastScissorArrayvNVX(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static nglMulticastViewportArrayvNVX(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    constructor()
}