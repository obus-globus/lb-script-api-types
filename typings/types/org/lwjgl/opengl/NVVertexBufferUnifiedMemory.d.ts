import type { LongBuffer } from '../../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class NVVertexBufferUnifiedMemory extends Object {
    static GL_COLOR_ARRAY_ADDRESS_NV: number;
    static GL_COLOR_ARRAY_LENGTH_NV: number;
    static GL_EDGE_FLAG_ARRAY_ADDRESS_NV: number;
    static GL_EDGE_FLAG_ARRAY_LENGTH_NV: number;
    static GL_ELEMENT_ARRAY_ADDRESS_NV: number;
    static GL_ELEMENT_ARRAY_LENGTH_NV: number;
    static GL_ELEMENT_ARRAY_UNIFIED_NV: number;
    static GL_FOG_COORD_ARRAY_ADDRESS_NV: number;
    static GL_FOG_COORD_ARRAY_LENGTH_NV: number;
    static GL_INDEX_ARRAY_ADDRESS_NV: number;
    static GL_INDEX_ARRAY_LENGTH_NV: number;
    static GL_NORMAL_ARRAY_ADDRESS_NV: number;
    static GL_NORMAL_ARRAY_LENGTH_NV: number;
    static GL_SECONDARY_COLOR_ARRAY_ADDRESS_NV: number;
    static GL_SECONDARY_COLOR_ARRAY_LENGTH_NV: number;
    static GL_TEXTURE_COORD_ARRAY_ADDRESS_NV: number;
    static GL_TEXTURE_COORD_ARRAY_LENGTH_NV: number;
    static GL_VERTEX_ARRAY_ADDRESS_NV: number;
    static GL_VERTEX_ARRAY_LENGTH_NV: number;
    static GL_VERTEX_ATTRIB_ARRAY_ADDRESS_NV: number;
    static GL_VERTEX_ATTRIB_ARRAY_LENGTH_NV: number;
    static GL_VERTEX_ATTRIB_ARRAY_UNIFIED_NV: number;
    static glBufferAddressRangeNV(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static glColorFormatNV(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static glEdgeFlagFormatNV(paramarg0: number): void;
    static glFogCoordFormatNV(paramarg0: number, paramarg1: number): void;
    static glGetIntegerui64iNV(paramarg0: number, paramarg1: number): number;
    static glGetIntegerui64i_vNV(paramarg0: number, paramarg1: number, paramarg2: LongBuffer): void;
    static glGetIntegerui64i_vNV(paramarg0: number, paramarg1: number, paramarg2: number[]): void;
    static glIndexFormatNV(paramarg0: number, paramarg1: number): void;
    static glNormalFormatNV(paramarg0: number, paramarg1: number): void;
    static glSecondaryColorFormatNV(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static glTexCoordFormatNV(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static glVertexAttribFormatNV(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: boolean, paramarg4: number): void;
    static glVertexAttribIFormatNV(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static glVertexFormatNV(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nglGetIntegerui64i_vNV(paramarg0: number, paramarg1: number, paramarg2: number): void;
    constructor()
}