import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ColorProviderRegistry } from '../../../../../../net/caffeinemc/mods/sodium/client/model/color/ColorProviderRegistry.d.ts'
import type { LightPipelineProvider } from '../../../../../../net/caffeinemc/mods/sodium/client/model/light/LightPipelineProvider.d.ts'
import type { BlendedColorProvider } from '../../../../../../net/caffeinemc/mods/sodium/client/model/quad/blender/BlendedColorProvider.d.ts'
import type { FluidRenderer } from '../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/pipeline/FluidRenderer.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { FluidState } from '../../../../../../net/minecraft/world/level/material/FluidState.d.ts'
export interface FluidRendererFactory extends Object{
    createPlatformFluidRenderer(arg0: ColorProviderRegistry, arg1: LightPipelineProvider): FluidRenderer;
    getWaterBlockColorProvider(): BlendedColorProvider<BlockState>;
    getWaterColorProvider(): BlendedColorProvider<FluidState>;
}