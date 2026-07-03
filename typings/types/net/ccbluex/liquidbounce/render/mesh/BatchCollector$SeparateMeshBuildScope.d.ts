import type { BufferBuilder } from '../../../../../com/mojang/blaze3d/vertex/BufferBuilder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BatchCollector$PendingDraw } from '../../../../../net/ccbluex/liquidbounce/render/mesh/BatchCollector$PendingDraw.d.ts'
import type { MeshBuildScope } from '../../../../../net/ccbluex/liquidbounce/render/mesh/MeshBuildScope.d.ts'
export class BatchCollector$SeparateMeshBuildScope extends Object implements MeshBuildScope {
    constructor(draw: BatchCollector$PendingDraw)
    // private closed: boolean;
    readonly consumer: BufferBuilder;
    // private draw: BatchCollector$PendingDraw;
    close(): void;
}