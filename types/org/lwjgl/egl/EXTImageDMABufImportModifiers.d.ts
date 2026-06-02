import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { LongBuffer } from '../../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class EXTImageDMABufImportModifiers extends Object {
    static EGL_DMA_BUF_PLANE0_MODIFIER_HI_EXT: number;
    static EGL_DMA_BUF_PLANE0_MODIFIER_LO_EXT: number;
    static EGL_DMA_BUF_PLANE1_MODIFIER_HI_EXT: number;
    static EGL_DMA_BUF_PLANE1_MODIFIER_LO_EXT: number;
    static EGL_DMA_BUF_PLANE2_MODIFIER_HI_EXT: number;
    static EGL_DMA_BUF_PLANE2_MODIFIER_LO_EXT: number;
    static EGL_DMA_BUF_PLANE3_FD_EXT: number;
    static EGL_DMA_BUF_PLANE3_MODIFIER_HI_EXT: number;
    static EGL_DMA_BUF_PLANE3_MODIFIER_LO_EXT: number;
    static EGL_DMA_BUF_PLANE3_OFFSET_EXT: number;
    static EGL_DMA_BUF_PLANE3_PITCH_EXT: number;
    static eglQueryDmaBufFormatsEXT(paramarg0: number, paramarg1: number[], paramarg2: number[]): boolean;
    static eglQueryDmaBufFormatsEXT(paramarg0: number, paramarg1: IntBuffer, paramarg2: IntBuffer): boolean;
    static eglQueryDmaBufModifiersEXT(paramarg0: number, paramarg1: number, paramarg2: LongBuffer, paramarg3: IntBuffer, paramarg4: IntBuffer): boolean;
    static eglQueryDmaBufModifiersEXT(paramarg0: number, paramarg1: number, paramarg2: number[], paramarg3: number[], paramarg4: number[]): boolean;
    static neglQueryDmaBufFormatsEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static neglQueryDmaBufModifiersEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): number;
    constructor()
}