import type { GpuBuffer } from '../../../../../../../com/mojang/blaze3d/buffers/GpuBuffer.d.ts'
import type { BindGroupLayout } from '../../../../../../../com/mojang/blaze3d/pipeline/BindGroupLayout.d.ts'
import type { RenderPipeline } from '../../../../../../../com/mojang/blaze3d/pipeline/RenderPipeline.d.ts'
import type { GpuSampler } from '../../../../../../../com/mojang/blaze3d/textures/GpuSampler.d.ts'
import type { VertexFormat } from '../../../../../../../com/mojang/blaze3d/vertex/VertexFormat.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ChunkRenderMatrices } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/ChunkRenderMatrices.d.ts'
import type { ChunkRenderer } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/ChunkRenderer.d.ts'
import type { ChunkRenderListIterable } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/lists/ChunkRenderListIterable.d.ts'
import type { TerrainRenderPass } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/terrain/TerrainRenderPass.d.ts'
import type { ChunkVertexType } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/vertex/format/ChunkVertexType.d.ts'
import type { CameraTransform } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/viewport/CameraTransform.d.ts'
import type { FogParameters } from '../../../../../../../net/caffeinemc/mods/sodium/client/util/FogParameters.d.ts'
export abstract class ShaderChunkRenderer extends Object implements ChunkRenderer {
    static BIND_GROUP: BindGroupLayout;
    constructor(arg0: ChunkVertexType)
    // private activeProgram: RenderPipeline;
    // private vertexFormat: VertexFormat;
    // private vertexType: ChunkVertexType;
    begin(arg0: TerrainRenderPass, arg1: FogParameters, arg2: GpuSampler): void;
    compileProgram(arg0: TerrainRenderPass): RenderPipeline;
    // private createShader(arg0: string, arg1: TerrainRenderPass): RenderPipeline;
    delete(): void;
    end(arg0: TerrainRenderPass): void;
    render(arg0: ChunkRenderMatrices, arg1: ChunkRenderListIterable, arg2: TerrainRenderPass, arg3: CameraTransform, arg4: FogParameters, arg5: boolean, arg6: GpuSampler, arg7: GpuBuffer, arg8: GpuBuffer): void;
    rotate(): void;
}