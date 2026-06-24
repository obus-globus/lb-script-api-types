import type { IndexType } from '../../../../com/mojang/blaze3d/IndexType.d.ts'
import type { PrimitiveTopology } from '../../../../com/mojang/blaze3d/PrimitiveTopology.d.ts'
import type { VertexFormat } from '../../../../com/mojang/blaze3d/vertex/VertexFormat.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class MeshData$DrawState extends Record {
    constructor(format: VertexFormat, vertexCount: number, indexCount: number, primitiveTopology: PrimitiveTopology, indexType: IndexType)
    // private format: VertexFormat;
    // private indexCount: number;
    // private indexType: IndexType;
    // private primitiveTopology: PrimitiveTopology;
    // private vertexCount: number;
    equals(o: Object | null): boolean;
    format(): VertexFormat;
    hashCode(): number;
    indexCount(): number;
    indexType(): IndexType;
    primitiveTopology(): PrimitiveTopology;
    toString(): string;
    vertexCount(): number;
}