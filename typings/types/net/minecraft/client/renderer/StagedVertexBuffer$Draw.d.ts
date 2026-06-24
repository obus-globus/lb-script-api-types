import type { IndexType } from '../../../../com/mojang/blaze3d/IndexType.d.ts'
import type { PrimitiveTopology } from '../../../../com/mojang/blaze3d/PrimitiveTopology.d.ts'
import type { ByteBufferBuilder$Result } from '../../../../com/mojang/blaze3d/vertex/ByteBufferBuilder$Result.d.ts'
import type { MeshData } from '../../../../com/mojang/blaze3d/vertex/MeshData.d.ts'
import type { VertexFormat } from '../../../../com/mojang/blaze3d/vertex/VertexFormat.d.ts'
import type { VertexSorting } from '../../../../com/mojang/blaze3d/vertex/VertexSorting.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { StagedVertexBufferDrawAccessor } from '../../../../net/fabricmc/fabric/mixin/client/rendering/StagedVertexBufferDrawAccessor.d.ts'
export class StagedVertexBuffer$Draw extends Object implements StagedVertexBufferDrawAccessor {
    private constructor(format: VertexFormat, primitiveTopology: PrimitiveTopology, quadSorting: VertexSorting)
    // private format: VertexFormat;
    // private indexCount: number;
    // private indexOffset: number;
    // private primitiveTopology: PrimitiveTopology;
    // private quadSorting: VertexSorting;
    // private vertexBufferSize: number;
    // private vertexBufferSlices: ByteBufferBuilder$Result[];
    // private vertexCount: number;
    // private vertexOffset: number;
    // private append(mesh: MeshData): void;
    fabric$indexCount(): number;
    // private freeVertexData(): void;
    // private indexType(): IndexType;
    isEmpty(): boolean;
}