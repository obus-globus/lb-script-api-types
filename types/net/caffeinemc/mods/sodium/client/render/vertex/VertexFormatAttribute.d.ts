import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { GlVertexAttributeFormat } from '../../../../../../../net/caffeinemc/mods/sodium/client/gl/attribute/GlVertexAttributeFormat.d.ts'
export class VertexFormatAttribute extends Record {
    // private count: number;
    // private format: GlVertexAttributeFormat;
    // private intType: boolean;
    // private name: string;
    // private normalized: boolean;
    count(): number;
    equals(arg0: Object | null): boolean;
    format(): GlVertexAttributeFormat;
    hashCode(): number;
    intType(): boolean;
    name(): string;
    normalized(): boolean;
    toString(): string;
}