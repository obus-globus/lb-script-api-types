import type { VertexFormat } from '../../../../com/mojang/blaze3d/vertex/VertexFormat.d.ts'
import type { VertexFormat$IndexType } from '../../../../com/mojang/blaze3d/vertex/VertexFormat$IndexType.d.ts'
import type { VertexFormat$Mode } from '../../../../com/mojang/blaze3d/vertex/VertexFormat$Mode.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class MeshData$DrawState extends Record {
    // private format: VertexFormat;
    // private indexCount: number;
    // private indexType: VertexFormat$IndexType;
    // private mode: VertexFormat$Mode;
    // private vertexCount: number;
    equals(o: Object | null): boolean;
    format(): VertexFormat;
    hashCode(): number;
    indexCount(): number;
    indexType(): VertexFormat$IndexType;
    mode(): VertexFormat$Mode;
    toString(): string;
    vertexCount(): number;
}