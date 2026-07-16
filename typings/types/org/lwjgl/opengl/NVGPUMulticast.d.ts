import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { DoubleBuffer } from '../../../java/nio/DoubleBuffer.d.ts'
import type { FloatBuffer } from '../../../java/nio/FloatBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { LongBuffer } from '../../../java/nio/LongBuffer.d.ts'
import type { ShortBuffer } from '../../../java/nio/ShortBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class NVGPUMulticast extends Object {
    static GL_MULTICAST_GPUS_NV: number;
    static GL_MULTICAST_PROGRAMMABLE_SAMPLE_LOCATION_NV: number;
    static GL_PER_GPU_STORAGE_BIT_NV: number;
    static GL_PER_GPU_STORAGE_NV: number;
    static GL_RENDER_GPU_MASK_NV: number;
    static glMulticastBarrierNV(): void;
    static glMulticastBlitFramebufferNV(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number, paramarg7: number, paramarg8: number, paramarg9: number, paramarg10: number, paramarg11: number): void;
    static glMulticastBufferSubDataNV(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number[]): void;
    static glMulticastBufferSubDataNV(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: ByteBuffer): void;
    static glMulticastBufferSubDataNV(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: DoubleBuffer): void;
    static glMulticastBufferSubDataNV(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: FloatBuffer): void;
    static glMulticastBufferSubDataNV(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: IntBuffer): void;
    static glMulticastBufferSubDataNV(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: ShortBuffer): void;
    static glMulticastCopyBufferSubDataNV(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number): void;
    static glMulticastCopyImageSubDataNV(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number, paramarg7: number, paramarg8: number, paramarg9: number, paramarg10: number, paramarg11: number, paramarg12: number, paramarg13: number, paramarg14: number, paramarg15: number, paramarg16: number): void;
    static glMulticastFramebufferSampleLocationsfvNV(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number[]): void;
    static glMulticastFramebufferSampleLocationsfvNV(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: FloatBuffer): void;
    static glMulticastGetQueryObjecti64NV(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static glMulticastGetQueryObjecti64vNV(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: LongBuffer): void;
    static glMulticastGetQueryObjecti64vNV(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number[]): void;
    static glMulticastGetQueryObjectiNV(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static glMulticastGetQueryObjectivNV(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number[]): void;
    static glMulticastGetQueryObjectivNV(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: IntBuffer): void;
    static glMulticastGetQueryObjectui64NV(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static glMulticastGetQueryObjectui64vNV(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: LongBuffer): void;
    static glMulticastGetQueryObjectui64vNV(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number[]): void;
    static glMulticastGetQueryObjectuiNV(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static glMulticastGetQueryObjectuivNV(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number[]): void;
    static glMulticastGetQueryObjectuivNV(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: IntBuffer): void;
    static glMulticastWaitSyncNV(paramarg0: number, paramarg1: number): void;
    static glRenderGpuMaskNV(paramarg0: number): void;
    static nglMulticastBufferSubDataNV(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): void;
    static nglMulticastFramebufferSampleLocationsfvNV(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): void;
    static nglMulticastGetQueryObjecti64vNV(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static nglMulticastGetQueryObjectivNV(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static nglMulticastGetQueryObjectui64vNV(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static nglMulticastGetQueryObjectuivNV(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    constructor()
}