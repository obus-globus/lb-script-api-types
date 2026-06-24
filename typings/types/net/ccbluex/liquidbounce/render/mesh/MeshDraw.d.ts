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
 * It stores uploaded vertex/index slices plus the draw parameters needed by {@link RenderPass.bindAndDraw}.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/render/mesh/MeshDraw.kt#L38 | src/main/kotlin/net/ccbluex/liquidbounce/render/mesh/MeshDraw.kt:38}
 */
export class MeshDraw extends Record {
    static DefaultUploader: MeshDraw$DefaultUploader;
    /**
     * Bind mesh buffers and issue one indexed draw call.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/render/mesh/MeshDraw.kt#L136 | src/main/kotlin/net/ccbluex/liquidbounce/render/mesh/MeshDraw.kt:136}
     */
    static bindAndDraw(renderPass: RenderPass, meshDraw: MeshDraw): void;
    static create(paramarg0: MeshData, paramarg1: RenderPipeline, paramarg2: MeshDraw$VertexUploader, paramarg3: MeshDraw$IndexUploader): MeshDraw;
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