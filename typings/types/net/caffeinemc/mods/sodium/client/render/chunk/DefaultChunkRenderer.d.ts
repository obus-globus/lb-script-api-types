import type { GpuBuffer } from '../../../../../../../com/mojang/blaze3d/buffers/GpuBuffer.d.ts'
import type { BindGroupLayout } from '../../../../../../../com/mojang/blaze3d/pipeline/BindGroupLayout.d.ts'
import type { GpuSampler } from '../../../../../../../com/mojang/blaze3d/textures/GpuSampler.d.ts'
import type { DrawContext } from '../../../../../../../net/caffeinemc/mods/sodium/client/gpu/device/context/DrawContext.d.ts'
import type { ChunkRenderMatrices } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/ChunkRenderMatrices.d.ts'
import type { ShaderChunkRenderer } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/ShaderChunkRenderer.d.ts'
import type { SharedQuadIndexBuffer } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/SharedQuadIndexBuffer.d.ts'
import type { ChunkRenderListIterable } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/lists/ChunkRenderListIterable.d.ts'
import type { TerrainRenderPass } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/terrain/TerrainRenderPass.d.ts'
import type { ChunkVertexType } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/vertex/format/ChunkVertexType.d.ts'
import type { CameraTransform } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/viewport/CameraTransform.d.ts'
import type { FogParameters } from '../../../../../../../net/caffeinemc/mods/sodium/client/util/FogParameters.d.ts'
export class DefaultChunkRenderer extends ShaderChunkRenderer {
    static BIND_GROUP: BindGroupLayout;
    static getVisibleFaces(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): number;
    constructor(arg0: ChunkVertexType)
    // private drawContext: DrawContext;
    // private sharedIndexBuffer: SharedQuadIndexBuffer;
    delete(): void;
    render(arg0: ChunkRenderMatrices, arg1: ChunkRenderListIterable, arg2: TerrainRenderPass, arg3: CameraTransform, arg4: FogParameters, arg5: boolean, arg6: GpuSampler, arg7: GpuBuffer, arg8: GpuBuffer): void;
    rotate(): void;
}