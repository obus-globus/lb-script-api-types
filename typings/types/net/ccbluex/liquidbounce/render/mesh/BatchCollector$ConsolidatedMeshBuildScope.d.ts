import type { BufferBuilder } from '../../../../../com/mojang/blaze3d/vertex/BufferBuilder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MeshBuildScope } from '../../../../../net/ccbluex/liquidbounce/render/mesh/MeshBuildScope.d.ts'
export class BatchCollector$ConsolidatedMeshBuildScope extends Object implements MeshBuildScope {
    constructor(consumer: BufferBuilder)
    readonly consumer: BufferBuilder;
    close(): void;
}