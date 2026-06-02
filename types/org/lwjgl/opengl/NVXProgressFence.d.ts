import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { LongBuffer } from '../../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class NVXProgressFence extends Object {
    static glClientWaitSemaphoreui64NVX(paramarg0: number[], paramarg1: number[]): void;
    static glClientWaitSemaphoreui64NVX(paramarg0: IntBuffer, paramarg1: LongBuffer): void;
    static glCreateProgressFenceNVX(): number;
    static glSignalSemaphoreui64NVX(paramarg0: number, paramarg1: number[], paramarg2: number[]): void;
    static glSignalSemaphoreui64NVX(paramarg0: number, paramarg1: IntBuffer, paramarg2: LongBuffer): void;
    static glWaitSemaphoreui64NVX(paramarg0: number, paramarg1: number[], paramarg2: number[]): void;
    static glWaitSemaphoreui64NVX(paramarg0: number, paramarg1: IntBuffer, paramarg2: LongBuffer): void;
    static nglClientWaitSemaphoreui64NVX(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nglSignalSemaphoreui64NVX(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static nglWaitSemaphoreui64NVX(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    constructor()
}