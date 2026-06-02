import type { Object } from '../../../java/lang/Object.d.ts'
import type { PointerBuffer } from '../../../org/lwjgl/PointerBuffer.d.ts'
export class NVStreamConsumerGLTextureYUV extends Object {
    static EGL_YUV_BUFFER_EXT: number;
    static EGL_YUV_NUMBER_OF_PLANES_EXT: number;
    static EGL_YUV_PLANE0_TEXTURE_UNIT_NV: number;
    static EGL_YUV_PLANE1_TEXTURE_UNIT_NV: number;
    static EGL_YUV_PLANE2_TEXTURE_UNIT_NV: number;
    static eglStreamConsumerGLTextureExternalAttribsNV(paramarg0: number, paramarg1: number, paramarg2: PointerBuffer): boolean;
    static neglStreamConsumerGLTextureExternalAttribsNV(paramarg0: number, paramarg1: number, paramarg2: number): number;
    constructor()
}