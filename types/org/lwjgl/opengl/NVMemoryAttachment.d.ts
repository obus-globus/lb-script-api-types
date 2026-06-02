import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class NVMemoryAttachment extends Object {
    static GL_ATTACHED_MEMORY_OBJECT_NV: number;
    static GL_ATTACHED_MEMORY_OFFSET_NV: number;
    static GL_DETACHED_BUFFERS_NV: number;
    static GL_DETACHED_MEMORY_INCARNATION_NV: number;
    static GL_DETACHED_TEXTURES_NV: number;
    static GL_MAX_DETACHED_BUFFERS_NV: number;
    static GL_MAX_DETACHED_TEXTURES_NV: number;
    static GL_MEMORY_ATTACHABLE_ALIGNMENT_NV: number;
    static GL_MEMORY_ATTACHABLE_NV: number;
    static GL_MEMORY_ATTACHABLE_SIZE_NV: number;
    static glBufferAttachMemoryNV(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static glGetMemoryObjectDetachedResourcesuivNV(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number[]): void;
    static glGetMemoryObjectDetachedResourcesuivNV(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: IntBuffer): void;
    static glNamedBufferAttachMemoryNV(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static glResetMemoryObjectParameterNV(paramarg0: number, paramarg1: number): void;
    static glTexAttachMemoryNV(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static glTextureAttachMemoryNV(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nglGetMemoryObjectDetachedResourcesuivNV(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): void;
    constructor()
}