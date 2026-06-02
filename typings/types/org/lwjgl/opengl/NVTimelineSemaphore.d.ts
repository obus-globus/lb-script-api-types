import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class NVTimelineSemaphore extends Object {
    static GL_MAX_TIMELINE_SEMAPHORE_VALUE_DIFFERENCE_NV: number;
    static GL_SEMAPHORE_TYPE_BINARY_NV: number;
    static GL_SEMAPHORE_TYPE_NV: number;
    static GL_SEMAPHORE_TYPE_TIMELINE_NV: number;
    static GL_TIMELINE_SEMAPHORE_VALUE_NV: number;
    static glCreateSemaphoresNV(): number;
    static glCreateSemaphoresNV(paramarg0: number[]): void;
    static glCreateSemaphoresNV(paramarg0: IntBuffer): void;
    static glGetSemaphoreParameterivNV(paramarg0: number, paramarg1: number, paramarg2: number[]): void;
    static glGetSemaphoreParameterivNV(paramarg0: number, paramarg1: number, paramarg2: IntBuffer): void;
    static glSemaphoreParameterivNV(paramarg0: number, paramarg1: number, paramarg2: number[]): void;
    static glSemaphoreParameterivNV(paramarg0: number, paramarg1: number, paramarg2: IntBuffer): void;
    static nglCreateSemaphoresNV(paramarg0: number, paramarg1: number): void;
    static nglGetSemaphoreParameterivNV(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nglSemaphoreParameterivNV(paramarg0: number, paramarg1: number, paramarg2: number): void;
    constructor()
}