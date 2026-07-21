import type { GpuBufferSlice } from '../../../../../com/mojang/blaze3d/buffers/GpuBufferSlice.d.ts'
import type { RenderPipeline } from '../../../../../com/mojang/blaze3d/pipeline/RenderPipeline.d.ts'
import type { RenderPass } from '../../../../../com/mojang/blaze3d/systems/RenderPass.d.ts'
import type { MeshData } from '../../../../../com/mojang/blaze3d/vertex/MeshData.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MeshDraw$DefaultUploader } from '../../../../../net/ccbluex/liquidbounce/render/mesh/MeshDraw$DefaultUploader.d.ts'
import type { MeshDraw$IndexUploader } from '../../../../../net/ccbluex/liquidbounce/render/mesh/MeshDraw$IndexUploader.d.ts'
import type { MeshDraw$MeshIndexBinding } from '../../../../../net/ccbluex/liquidbounce/render/mesh/MeshDraw$MeshIndexBinding.d.ts'
import type { MeshDraw$VertexUploader } from '../../../../../net/ccbluex/liquidbounce/render/mesh/MeshDraw$VertexUploader.d.ts'
/**
 * GPU-ready draw descriptor produced from {@link MeshData}.
 *
 * It stores uploaded vertex data plus an index binding strategy
 * and the draw parameters needed by {@link RenderPass.bindAndDraw}.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e56f181853dc858654c9fc909afec417d274473d/src/main/kotlin/net/ccbluex/liquidbounce/render/mesh/MeshDraw.kt#L42 | src/main/kotlin/net/ccbluex/liquidbounce/render/mesh/MeshDraw.kt:42}
 */
export class MeshDraw extends Record {
    static DefaultUploader: MeshDraw$DefaultUploader;
    /**
     * Bind mesh buffers and issue one indexed draw call.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e56f181853dc858654c9fc909afec417d274473d/src/main/kotlin/net/ccbluex/liquidbounce/render/mesh/MeshDraw.kt#L203 | src/main/kotlin/net/ccbluex/liquidbounce/render/mesh/MeshDraw.kt:203}
     */
    static bindAndDraw(self: RenderPass, meshDraw: MeshDraw): void;
    static create(self: MeshData, pipeline: RenderPipeline, vertexUploader: MeshDraw$VertexUploader, indexUploader: MeshDraw$IndexUploader): MeshDraw;
    constructor(vertexSlice: GpuBufferSlice, indexBinding: MeshDraw$MeshIndexBinding, indexCount: number)
    // private indexBinding: MeshDraw$MeshIndexBinding;
    /*not mapped: */ indexBinding(): MeshDraw$MeshIndexBinding;
    // private indexCount: number;
    /*not mapped: */ indexCount(): number;
    // private vertexSlice: GpuBufferSlice;
    /*not mapped: */ vertexSlice(): GpuBufferSlice;
    component1(): GpuBufferSlice;
    component2(): MeshDraw$MeshIndexBinding;
    component3(): number;
    copy(vertexSlice: GpuBufferSlice, indexBinding: MeshDraw$MeshIndexBinding, indexCount: number): MeshDraw;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}