import type { GpuSampler } from '../../../../../../../com/mojang/blaze3d/textures/GpuSampler.d.ts'
import type { CommandList } from '../../../../../../../net/caffeinemc/mods/sodium/client/gl/device/CommandList.d.ts'
import type { RenderDevice } from '../../../../../../../net/caffeinemc/mods/sodium/client/gl/device/RenderDevice.d.ts'
import type { GlTessellation } from '../../../../../../../net/caffeinemc/mods/sodium/client/gl/tessellation/GlTessellation.d.ts'
import type { ChunkRenderMatrices } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/ChunkRenderMatrices.d.ts'
import type { ShaderChunkRenderer } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/ShaderChunkRenderer.d.ts'
import type { SharedQuadIndexBuffer } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/SharedQuadIndexBuffer.d.ts'
import type { ChunkRenderListIterable } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/lists/ChunkRenderListIterable.d.ts'
import type { RenderRegion } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/region/RenderRegion.d.ts'
import type { RenderRegion$DeviceResources } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/region/RenderRegion$DeviceResources.d.ts'
import type { TerrainRenderPass } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/terrain/TerrainRenderPass.d.ts'
import type { ChunkVertexType } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/vertex/format/ChunkVertexType.d.ts'
import type { CameraTransform } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/viewport/CameraTransform.d.ts'
import type { FogParameters } from '../../../../../../../net/caffeinemc/mods/sodium/client/util/FogParameters.d.ts'
export class DefaultChunkRenderer extends ShaderChunkRenderer {
    static getVisibleFaces(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): number;
    constructor(arg0: RenderDevice, arg1: ChunkVertexType)
    // private sharedIndexBuffer: SharedQuadIndexBuffer;
    // private createRegionTessellation(arg0: CommandList, arg1: RenderRegion$DeviceResources, arg2: boolean): GlTessellation;
    delete(arg0: CommandList): void;
    // private prepareIndexedTessellation(arg0: CommandList, arg1: RenderRegion): GlTessellation;
    // private prepareTessellation(arg0: CommandList, arg1: RenderRegion): GlTessellation;
    render(arg0: ChunkRenderMatrices, arg1: CommandList, arg2: ChunkRenderListIterable, arg3: TerrainRenderPass, arg4: CameraTransform, arg5: FogParameters, arg6: boolean, arg7: GpuSampler): void;
}