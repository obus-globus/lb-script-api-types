import type { ByteBufferBuilder } from '../../../../com/mojang/blaze3d/vertex/ByteBufferBuilder.d.ts'
import type { ByteBufferBuilder$Result } from '../../../../com/mojang/blaze3d/vertex/ByteBufferBuilder$Result.d.ts'
import type { CompactVectorArray } from '../../../../com/mojang/blaze3d/vertex/CompactVectorArray.d.ts'
import type { MeshData$DrawState } from '../../../../com/mojang/blaze3d/vertex/MeshData$DrawState.d.ts'
import type { MeshData$SortState } from '../../../../com/mojang/blaze3d/vertex/MeshData$SortState.d.ts'
import type { VertexFormat } from '../../../../com/mojang/blaze3d/vertex/VertexFormat.d.ts'
import type { VertexSorting } from '../../../../com/mojang/blaze3d/vertex/VertexSorting.d.ts'
import type { AutoCloseable } from '../../../../java/lang/AutoCloseable.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class MeshData extends Object implements AutoCloseable {
    static decodeQuadCentroids(paramvertexBuffer: ByteBuffer, paramvertexCount: number, paramformat: VertexFormat, paramoutput: CompactVectorArray, paramoutputIndex: number): void;
    constructor(vertexBuffer: ByteBufferBuilder$Result, drawState: MeshData$DrawState)
    // private drawState: MeshData$DrawState;
    // private indexBuffer: ByteBufferBuilder$Result;
    // private vertexBuffer: ByteBufferBuilder$Result;
    close(): void;
    drawState(): MeshData$DrawState;
    indexBuffer(): ByteBuffer;
    sortQuads(indexBufferTarget: ByteBufferBuilder, sorting: VertexSorting): MeshData$SortState;
    vertexBuffer(): ByteBuffer;
    vertexBufferSlice(): ByteBufferBuilder$Result;
}