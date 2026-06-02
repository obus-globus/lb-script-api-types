import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { LongBuffer } from '../../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class EXTSemaphore extends Object {
    static GL_DEVICE_UUID_EXT: number;
    static GL_DRIVER_UUID_EXT: number;
    static GL_LAYOUT_COLOR_ATTACHMENT_EXT: number;
    static GL_LAYOUT_DEPTH_ATTACHMENT_STENCIL_READ_ONLY_EXT: number;
    static GL_LAYOUT_DEPTH_READ_ONLY_STENCIL_ATTACHMENT_EXT: number;
    static GL_LAYOUT_DEPTH_STENCIL_ATTACHMENT_EXT: number;
    static GL_LAYOUT_DEPTH_STENCIL_READ_ONLY_EXT: number;
    static GL_LAYOUT_GENERAL_EXT: number;
    static GL_LAYOUT_SHADER_READ_ONLY_EXT: number;
    static GL_LAYOUT_TRANSFER_DST_EXT: number;
    static GL_LAYOUT_TRANSFER_SRC_EXT: number;
    static GL_NUM_DEVICE_UUIDS_EXT: number;
    static GL_UUID_SIZE_EXT: number;
    static glDeleteSemaphoresEXT(paramarg0: number): void;
    static glDeleteSemaphoresEXT(paramarg0: number[]): void;
    static glDeleteSemaphoresEXT(paramarg0: IntBuffer): void;
    static glGenSemaphoresEXT(): number;
    static glGenSemaphoresEXT(paramarg0: number[]): void;
    static glGenSemaphoresEXT(paramarg0: IntBuffer): void;
    static glGetSemaphoreParameterui64EXT(paramarg0: number, paramarg1: number): number;
    static glGetSemaphoreParameterui64vEXT(paramarg0: number, paramarg1: number, paramarg2: LongBuffer): void;
    static glGetSemaphoreParameterui64vEXT(paramarg0: number, paramarg1: number, paramarg2: number[]): void;
    static glGetUnsignedBytei_vEXT(paramarg0: number, paramarg1: number, paramarg2: ByteBuffer): void;
    static glGetUnsignedBytevEXT(paramarg0: number, paramarg1: ByteBuffer): void;
    static glIsSemaphoreEXT(paramarg0: number): boolean;
    static glSemaphoreParameterui64EXT(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static glSemaphoreParameterui64vEXT(paramarg0: number, paramarg1: number, paramarg2: LongBuffer): void;
    static glSemaphoreParameterui64vEXT(paramarg0: number, paramarg1: number, paramarg2: number[]): void;
    static glSignalSemaphoreEXT(paramarg0: number, paramarg1: number[], paramarg2: number[], paramarg3: number[]): void;
    static glSignalSemaphoreEXT(paramarg0: number, paramarg1: IntBuffer, paramarg2: IntBuffer, paramarg3: IntBuffer): void;
    static glWaitSemaphoreEXT(paramarg0: number, paramarg1: number[], paramarg2: number[], paramarg3: number[]): void;
    static glWaitSemaphoreEXT(paramarg0: number, paramarg1: IntBuffer, paramarg2: IntBuffer, paramarg3: IntBuffer): void;
    static nglDeleteSemaphoresEXT(paramarg0: number, paramarg1: number): void;
    static nglGenSemaphoresEXT(paramarg0: number, paramarg1: number): void;
    static nglGetSemaphoreParameterui64vEXT(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nglGetUnsignedBytei_vEXT(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nglGetUnsignedBytevEXT(paramarg0: number, paramarg1: number): void;
    static nglSemaphoreParameterui64vEXT(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nglSignalSemaphoreEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): void;
    static nglWaitSemaphoreEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): void;
    constructor()
}