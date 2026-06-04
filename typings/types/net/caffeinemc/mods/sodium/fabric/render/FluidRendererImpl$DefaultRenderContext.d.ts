import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ColorProvider } from '../../../../../../net/caffeinemc/mods/sodium/client/model/color/ColorProvider.d.ts'
import type { ColorProviderRegistry } from '../../../../../../net/caffeinemc/mods/sodium/client/model/color/ColorProviderRegistry.d.ts'
import type { ChunkModelBuilder } from '../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/buffers/ChunkModelBuilder.d.ts'
import type { DefaultFluidRenderer } from '../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/pipeline/DefaultFluidRenderer.d.ts'
import type { Material } from '../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/terrain/material/Material.d.ts'
import type { TranslucentGeometryCollector } from '../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/TranslucentGeometryCollector.d.ts'
import type { LevelSlice } from '../../../../../../net/caffeinemc/mods/sodium/client/world/LevelSlice.d.ts'
import type { FluidRenderHandler } from '../../../../../../net/fabricmc/fabric/api/client/render/fluid/v1/FluidRenderHandler.d.ts'
import type { FluidRendering$DefaultRenderer } from '../../../../../../net/fabricmc/fabric/api/client/render/fluid/v1/FluidRendering$DefaultRenderer.d.ts'
import type { BlockTintSource } from '../../../../../../net/minecraft/client/color/block/BlockTintSource.d.ts'
import type { BlockAndTintGetter } from '../../../../../../net/minecraft/client/renderer/block/BlockAndTintGetter.d.ts'
import type { FluidRenderer } from '../../../../../../net/minecraft/client/renderer/block/FluidRenderer.d.ts'
import type { FluidRenderer$Output } from '../../../../../../net/minecraft/client/renderer/block/FluidRenderer$Output.d.ts'
import type { FluidStateModelSet } from '../../../../../../net/minecraft/client/renderer/block/FluidStateModelSet.d.ts'
import type { ChunkSectionLayer } from '../../../../../../net/minecraft/client/renderer/chunk/ChunkSectionLayer.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { Fluid } from '../../../../../../net/minecraft/world/level/material/Fluid.d.ts'
import type { FluidState } from '../../../../../../net/minecraft/world/level/material/FluidState.d.ts'
export class FluidRendererImpl$DefaultRenderContext extends Object implements FluidRendering$DefaultRenderer {
    private constructor()
    // private blockPos: BlockPos;
    // private blockState: BlockState;
    // private collector: TranslucentGeometryCollector;
    // private colorProviderRegistry: ColorProviderRegistry;
    // private fluidState: FluidState;
    // private handler: FluidRenderHandler;
    // private hasModOverride: boolean;
    // private level: LevelSlice;
    // private material: Material;
    // private meshBuilder: ChunkModelBuilder;
    // private modelSet: FluidStateModelSet;
    // private offset: BlockPos;
    // private renderer: DefaultFluidRenderer;
    clear(): void;
    getColorProvider(arg0: Fluid, arg1: BlockTintSource): ColorProvider<FluidState>;
    render(arg0: FluidRenderer, arg1: FluidRenderHandler, arg2: BlockAndTintGetter, arg3: BlockPos, arg4: (param0: ChunkSectionLayer) => com.mojang.blaze3d.vertex.VertexConsumer, arg5: BlockState, arg6: FluidState): void;
    setUp(arg0: ColorProviderRegistry, arg1: DefaultFluidRenderer, arg2: LevelSlice, arg3: BlockState, arg4: FluidState, arg5: BlockPos, arg6: BlockPos, arg7: TranslucentGeometryCollector, arg8: ChunkModelBuilder, arg9: Material, arg10: FluidRenderHandler, arg11: boolean, arg12: FluidStateModelSet): void;
}