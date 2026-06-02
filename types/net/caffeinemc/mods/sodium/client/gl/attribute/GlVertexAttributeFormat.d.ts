import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class GlVertexAttributeFormat extends Record {
    static BYTE: GlVertexAttributeFormat;
    static FLOAT: GlVertexAttributeFormat;
    static INT: GlVertexAttributeFormat;
    static SHORT: GlVertexAttributeFormat;
    static UNSIGNED_BYTE: GlVertexAttributeFormat;
    static UNSIGNED_INT: GlVertexAttributeFormat;
    static UNSIGNED_SHORT: GlVertexAttributeFormat;
    // private size: number;
    // private typeId: number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    size(): number;
    toString(): string;
    typeId(): number;
}