import type { GpuBufferSlice } from '../../../../../com/mojang/blaze3d/buffers/GpuBufferSlice.d.ts'
import type { RenderPipeline } from '../../../../../com/mojang/blaze3d/pipeline/RenderPipeline.d.ts'
import type { RenderPass } from '../../../../../com/mojang/blaze3d/systems/RenderPass.d.ts'
import type { MeshData } from '../../../../../com/mojang/blaze3d/vertex/MeshData.d.ts'
import type { VertexFormat } from '../../../../../com/mojang/blaze3d/vertex/VertexFormat.d.ts'
import type { VertexFormat$IndexType } from '../../../../../com/mojang/blaze3d/vertex/VertexFormat$IndexType.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { GrowableMappableRingBuffer } from '../../../../../net/ccbluex/liquidbounce/render/GrowableMappableRingBuffer.d.ts'
import type { MeshDraw$Companion } from '../../../../../net/ccbluex/liquidbounce/render/mesh/MeshDraw$Companion.d.ts'
/**
 * GPU-ready draw descriptor produced from {@link MeshData}.
 *
 * It stores uploaded vertex/index slices plus the draw parameters needed by {@link RenderPass.bindAndDraw}.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/render/mesh/MeshDraw.kt#L38 | src/main/kotlin/net/ccbluex/liquidbounce/render/mesh/MeshDraw.kt:38}
 */
export class MeshDraw extends Record {
    static Companion: MeshDraw$Companion;
    /**
     * Bind mesh buffers and issue one indexed draw call.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/render/mesh/MeshDraw.kt#L136 | src/main/kotlin/net/ccbluex/liquidbounce/render/mesh/MeshDraw.kt:136}
     */
    static bindAndDraw(renderPass: RenderPass, meshDraw: MeshDraw): void;
    static create(paramarg0: MeshData, paramarg1: RenderPipeline, paramarg2: (param0: VertexFormat) => GrowableMappableRingBuffer, paramarg3: (param0: VertexFormat$IndexType) => GrowableMappableRingBuffer): MeshDraw;
    constructor(vertexSlice: GpuBufferSlice, indexSlice: GpuBufferSlice, vertexFormat: VertexFormat, indexType: VertexFormat$IndexType, indexCount: number)
    // private indexCount: number;
    /*not mapped: */ indexCount(): number;
    // private indexSlice: GpuBufferSlice;
    /*not mapped: */ indexSlice(): GpuBufferSlice;
    // private indexType: VertexFormat$IndexType;
    /*not mapped: */ indexType(): VertexFormat$IndexType;
    // private vertexFormat: VertexFormat;
    /*not mapped: */ vertexFormat(): VertexFormat;
    // private vertexSlice: GpuBufferSlice;
    /*not mapped: */ vertexSlice(): GpuBufferSlice;
    component1(): GpuBufferSlice;
    component2(): GpuBufferSlice;
    component3(): VertexFormat;
    component4(): VertexFormat$IndexType;
    component5(): number;
    copy(vertexSlice: GpuBufferSlice, indexSlice: GpuBufferSlice, vertexFormat: VertexFormat, indexType: VertexFormat$IndexType, indexCount: number): MeshDraw;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}