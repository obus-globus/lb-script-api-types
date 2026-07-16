import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { FloatBuffer } from '../../../java/nio/FloatBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class WGLAMDGPUAssociation extends Object {
    static WGL_GPU_CLOCK_AMD: number;
    static WGL_GPU_FASTEST_TARGET_GPUS_AMD: number;
    static WGL_GPU_NUM_PIPES_AMD: number;
    static WGL_GPU_NUM_RB_AMD: number;
    static WGL_GPU_NUM_SIMD_AMD: number;
    static WGL_GPU_NUM_SPI_AMD: number;
    static WGL_GPU_OPENGL_VERSION_STRING_AMD: number;
    static WGL_GPU_RAM_AMD: number;
    static WGL_GPU_RENDERER_STRING_AMD: number;
    static WGL_GPU_VENDOR_AMD: number;
    static nwglCreateAssociatedContextAttribsAMD(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static nwglGetGPUIDsAMD(paramarg0: number, paramarg1: number): number;
    static nwglGetGPUInfoAMD(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): number;
    static wglBlitContextFramebufferAMD(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number, paramarg7: number, paramarg8: number, paramarg9: number, paramarg10: number): void;
    static wglCreateAssociatedContextAMD(paramarg0: number): number;
    static wglCreateAssociatedContextAttribsAMD(paramarg0: number, paramarg1: number, paramarg2: number[]): number;
    static wglCreateAssociatedContextAttribsAMD(paramarg0: number, paramarg1: number, paramarg2: IntBuffer): number;
    static wglDeleteAssociatedContextAMD(paramarg0: number): boolean;
    static wglGetContextGPUIDAMD(paramarg0: number): number;
    static wglGetCurrentAssociatedContextAMD(): number;
    static wglGetGPUIDsAMD(paramarg0: number[]): number;
    static wglGetGPUIDsAMD(paramarg0: IntBuffer): number;
    static wglGetGPUInfoAMD(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number[]): number;
    static wglGetGPUInfoAMD(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: ByteBuffer): number;
    static wglGetGPUInfoAMD(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: FloatBuffer): number;
    static wglGetGPUInfoAMD(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: IntBuffer): number;
    static wglMakeAssociatedContextCurrentAMD(paramarg0: number): boolean;
    constructor()
}