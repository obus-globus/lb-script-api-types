import type { GpuBufferSlice } from '../../../../../com/mojang/blaze3d/buffers/GpuBufferSlice.d.ts'
import type { RenderTarget } from '../../../../../com/mojang/blaze3d/pipeline/RenderTarget.d.ts'
import type { ByteBufferBuilder } from '../../../../../com/mojang/blaze3d/vertex/ByteBufferBuilder.d.ts'
import type { Object2ObjectFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ObjectFunction.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { RenderDrawKey } from '../../../../../net/ccbluex/liquidbounce/render/engine/RenderDrawKey.d.ts'
import type { BatchCollector$BuiltDraw } from '../../../../../net/ccbluex/liquidbounce/render/mesh/BatchCollector$BuiltDraw.d.ts'
import type { BatchCollector$PendingDraw } from '../../../../../net/ccbluex/liquidbounce/render/mesh/BatchCollector$PendingDraw.d.ts'
import type { MeshBuildScope } from '../../../../../net/ccbluex/liquidbounce/render/mesh/MeshBuildScope.d.ts'
export class BatchCollector extends Object {
    constructor()
    // private appendNewBuilder: (param0: Object) => BatchCollector$PendingDraw;
    // private bufferAllocatorInUse: ByteBufferBuilder[];
    // private builtBuffers: BatchCollector$BuiltDraw[];
    // private consolidatedDraws: Map<RenderDrawKey, BatchCollector$PendingDraw>;
    // private drawOrder: BatchCollector$PendingDraw[];
    // private clearBuilders(): void;
    flush(renderTarget: RenderTarget, dynamicTransforms: GpuBufferSlice): void;
    start(key: RenderDrawKey): MeshBuildScope;
}