import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class GLXAMDGPUAssociation extends Object {
    static GLX_GPU_CLOCK_AMD: number;
    static GLX_GPU_FASTEST_TARGET_GPUS_AMD: number;
    static GLX_GPU_NUM_PIPES_AMD: number;
    static GLX_GPU_NUM_RB_AMD: number;
    static GLX_GPU_NUM_SIMD_AMD: number;
    static GLX_GPU_NUM_SPI_AMD: number;
    static GLX_GPU_OPENGL_VERSION_STRING_AMD: number;
    static GLX_GPU_RAM_AMD: number;
    static GLX_GPU_RENDERER_STRING_AMD: number;
    static GLX_GPU_VENDOR_AMD: number;
    static glXBlitContextFramebufferAMD(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number, paramarg7: number, paramarg8: number, paramarg9: number, paramarg10: number): void;
    static glXCreateAssociatedContextAMD(paramarg0: number, paramarg1: number): number;
    static glXCreateAssociatedContextAttribsAMD(paramarg0: number, paramarg1: number, paramarg2: number[]): number;
    static glXCreateAssociatedContextAttribsAMD(paramarg0: number, paramarg1: number, paramarg2: IntBuffer): number;
    static glXDeleteAssociatedContextAMD(paramarg0: number): boolean;
    static glXGetContextGPUIDAMD(paramarg0: number): number;
    static glXGetCurrentAssociatedContextAMD(): number;
    static glXGetGPUIDsAMD(paramarg0: number[]): number;
    static glXGetGPUIDsAMD(paramarg0: IntBuffer): number;
    static glXGetGPUInfoAMD(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: ByteBuffer): number;
    static glXMakeAssociatedContextCurrentAMD(paramarg0: number): boolean;
    static nglXCreateAssociatedContextAttribsAMD(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static nglXGetGPUIDsAMD(paramarg0: number, paramarg1: number): number;
    static nglXGetGPUInfoAMD(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): number;
    constructor()
}