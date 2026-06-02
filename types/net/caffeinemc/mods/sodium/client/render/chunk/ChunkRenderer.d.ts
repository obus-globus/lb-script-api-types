import type { GpuSampler } from '../../../../../../../com/mojang/blaze3d/textures/GpuSampler.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CommandList } from '../../../../../../../net/caffeinemc/mods/sodium/client/gl/device/CommandList.d.ts'
import type { ChunkRenderMatrices } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/ChunkRenderMatrices.d.ts'
import type { ChunkRenderListIterable } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/lists/ChunkRenderListIterable.d.ts'
import type { TerrainRenderPass } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/terrain/TerrainRenderPass.d.ts'
import type { CameraTransform } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/viewport/CameraTransform.d.ts'
import type { FogParameters } from '../../../../../../../net/caffeinemc/mods/sodium/client/util/FogParameters.d.ts'
export interface ChunkRenderer extends Object{
    delete(arg0: CommandList): void;
    render(arg0: ChunkRenderMatrices, arg1: CommandList, arg2: ChunkRenderListIterable, arg3: TerrainRenderPass, arg4: CameraTransform, arg5: FogParameters, arg6: boolean, arg7: GpuSampler): void;
}