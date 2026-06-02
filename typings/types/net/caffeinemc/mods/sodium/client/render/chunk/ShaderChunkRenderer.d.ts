import type { GpuSampler } from '../../../../../../../com/mojang/blaze3d/textures/GpuSampler.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { GlVertexFormat } from '../../../../../../../net/caffeinemc/mods/sodium/client/gl/attribute/GlVertexFormat.d.ts'
import type { CommandList } from '../../../../../../../net/caffeinemc/mods/sodium/client/gl/device/CommandList.d.ts'
import type { RenderDevice } from '../../../../../../../net/caffeinemc/mods/sodium/client/gl/device/RenderDevice.d.ts'
import type { GlProgram } from '../../../../../../../net/caffeinemc/mods/sodium/client/gl/shader/GlProgram.d.ts'
import type { ChunkRenderer } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/ChunkRenderer.d.ts'
import type { ChunkShaderInterface } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/shader/ChunkShaderInterface.d.ts'
import type { ChunkShaderOptions } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/shader/ChunkShaderOptions.d.ts'
import type { TerrainRenderPass } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/terrain/TerrainRenderPass.d.ts'
import type { ChunkVertexType } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/vertex/format/ChunkVertexType.d.ts'
import type { FogParameters } from '../../../../../../../net/caffeinemc/mods/sodium/client/util/FogParameters.d.ts'
export abstract class ShaderChunkRenderer extends Object implements ChunkRenderer {
    constructor(arg0: RenderDevice, arg1: ChunkVertexType)
    // private activeProgram: GlProgram<ChunkShaderInterface>;
    // private device: RenderDevice;
    // private programs: Map<ChunkShaderOptions, GlProgram<ChunkShaderInterface>>;
    // private vertexFormat: GlVertexFormat;
    // private vertexType: ChunkVertexType;
    begin(arg0: TerrainRenderPass, arg1: FogParameters, arg2: GpuSampler): void;
    compileProgram(arg0: ChunkShaderOptions): GlProgram<ChunkShaderInterface>;
    // private createShader(arg0: string, arg1: ChunkShaderOptions): GlProgram<ChunkShaderInterface>;
    delete(arg0: CommandList): void;
    end(arg0: TerrainRenderPass): void;
}