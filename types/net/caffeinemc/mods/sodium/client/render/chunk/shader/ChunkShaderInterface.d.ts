import type { GpuSampler } from '../../../../../../../../com/mojang/blaze3d/textures/GpuSampler.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { GlBuffer } from '../../../../../../../../net/caffeinemc/mods/sodium/client/gl/buffer/GlBuffer.d.ts'
import type { TerrainRenderPass } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/terrain/TerrainRenderPass.d.ts'
import type { FogParameters } from '../../../../../../../../net/caffeinemc/mods/sodium/client/util/FogParameters.d.ts'
import type { Matrix4fc } from '../../../../../../../../org/joml/Matrix4fc.d.ts'
export interface ChunkShaderInterface extends Object{
    resetState(): void;
    setChunkData(arg0: GlBuffer, arg1: number): void;
    setModelViewMatrix(arg0: Matrix4fc): void;
    setProjectionMatrix(arg0: Matrix4fc): void;
    setRegionOffset(arg0: number, arg1: number, arg2: number): void;
    setupState(arg0: TerrainRenderPass, arg1: FogParameters, arg2: GpuSampler): void;
}