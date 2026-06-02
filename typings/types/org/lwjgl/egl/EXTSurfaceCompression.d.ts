import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { PointerBuffer } from '../../../org/lwjgl/PointerBuffer.d.ts'
export class EXTSurfaceCompression extends Object {
    static EGL_SURFACE_COMPRESSION_EXT: number;
    static EGL_SURFACE_COMPRESSION_FIXED_RATE_10BPC_EXT: number;
    static EGL_SURFACE_COMPRESSION_FIXED_RATE_11BPC_EXT: number;
    static EGL_SURFACE_COMPRESSION_FIXED_RATE_12BPC_EXT: number;
    static EGL_SURFACE_COMPRESSION_FIXED_RATE_1BPC_EXT: number;
    static EGL_SURFACE_COMPRESSION_FIXED_RATE_2BPC_EXT: number;
    static EGL_SURFACE_COMPRESSION_FIXED_RATE_3BPC_EXT: number;
    static EGL_SURFACE_COMPRESSION_FIXED_RATE_4BPC_EXT: number;
    static EGL_SURFACE_COMPRESSION_FIXED_RATE_5BPC_EXT: number;
    static EGL_SURFACE_COMPRESSION_FIXED_RATE_6BPC_EXT: number;
    static EGL_SURFACE_COMPRESSION_FIXED_RATE_7BPC_EXT: number;
    static EGL_SURFACE_COMPRESSION_FIXED_RATE_8BPC_EXT: number;
    static EGL_SURFACE_COMPRESSION_FIXED_RATE_9BPC_EXT: number;
    static EGL_SURFACE_COMPRESSION_FIXED_RATE_DEFAULT_EXT: number;
    static EGL_SURFACE_COMPRESSION_FIXED_RATE_NONE_EXT: number;
    static EGL_SURFACE_COMPRESSION_PLANE1_EXT: number;
    static EGL_SURFACE_COMPRESSION_PLANE2_EXT: number;
    static eglQuerySupportedCompressionRatesEXT(paramarg0: number, paramarg1: number, paramarg2: PointerBuffer, paramarg3: number[], paramarg4: number[]): boolean;
    static eglQuerySupportedCompressionRatesEXT(paramarg0: number, paramarg1: number, paramarg2: PointerBuffer, paramarg3: IntBuffer, paramarg4: IntBuffer): boolean;
    static neglQuerySupportedCompressionRatesEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): number;
    constructor()
}