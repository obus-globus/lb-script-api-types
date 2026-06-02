import type { ByteBufferBuilder } from '../../../../com/mojang/blaze3d/vertex/ByteBufferBuilder.d.ts'
import type { ByteBufferBuilder$Result } from '../../../../com/mojang/blaze3d/vertex/ByteBufferBuilder$Result.d.ts'
import type { CompactVectorArray } from '../../../../com/mojang/blaze3d/vertex/CompactVectorArray.d.ts'
import type { VertexFormat$IndexType } from '../../../../com/mojang/blaze3d/vertex/VertexFormat$IndexType.d.ts'
import type { VertexSorting } from '../../../../com/mojang/blaze3d/vertex/VertexSorting.d.ts'
import type { IntConsumer } from '../../../../it/unimi/dsi/fastutil/ints/IntConsumer.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class MeshData$SortState extends Record {
    constructor(centroids: CompactVectorArray, indexType: VertexFormat$IndexType)
    // private centroids: CompactVectorArray;
    // private indexType: VertexFormat$IndexType;
    buildSortedIndexBuffer(target: ByteBufferBuilder, sorting: VertexSorting): ByteBufferBuilder$Result;
    centroids(): CompactVectorArray;
    equals(o: Object | null): boolean;
    hashCode(): number;
    indexType(): VertexFormat$IndexType;
    // private indexWriter(pointer: number, indexType: VertexFormat$IndexType): (param0: number) => void;
    toString(): string;
}