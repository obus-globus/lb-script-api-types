import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class NVQueryResource extends Object {
    static GL_QUERY_RESOURCE_BUFFEROBJECT_NV: number;
    static GL_QUERY_RESOURCE_MEMTYPE_VIDMEM_NV: number;
    static GL_QUERY_RESOURCE_RENDERBUFFER_NV: number;
    static GL_QUERY_RESOURCE_SYS_RESERVED_NV: number;
    static GL_QUERY_RESOURCE_TEXTURE_NV: number;
    static GL_QUERY_RESOURCE_TYPE_VIDMEM_ALLOC_NV: number;
    static glQueryResourceNV(paramarg0: number, paramarg1: number, paramarg2: number[]): number;
    static glQueryResourceNV(paramarg0: number, paramarg1: number, paramarg2: IntBuffer): number;
    static nglQueryResourceNV(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): number;
    constructor()
}