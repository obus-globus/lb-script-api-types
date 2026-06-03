import type { ColorProviderRegistry } from '../../../../../../net/caffeinemc/mods/sodium/client/model/color/ColorProviderRegistry.d.ts'
import type { LightPipelineProvider } from '../../../../../../net/caffeinemc/mods/sodium/client/model/light/LightPipelineProvider.d.ts'
import type { ChunkBuildBuffers } from '../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/ChunkBuildBuffers.d.ts'
import type { DefaultFluidRenderer } from '../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/pipeline/DefaultFluidRenderer.d.ts'
import type { FluidRenderer } from '../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/pipeline/FluidRenderer.d.ts'
import type { TranslucentGeometryCollector } from '../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/TranslucentGeometryCollector.d.ts'
import type { LevelSlice } from '../../../../../../net/caffeinemc/mods/sodium/client/world/LevelSlice.d.ts'
import type { FluidRendererImpl$DefaultRenderContext } from '../../../../../../net/caffeinemc/mods/sodium/fabric/render/FluidRendererImpl$DefaultRenderContext.d.ts'
import type { VertexEncoderInterface } from '../../../../../../net/irisshaders/iris/vertices/sodium/terrain/VertexEncoderInterface.d.ts'
import type { FluidRenderer as FluidRenderer_2 } from '../../../../../../net/minecraft/client/renderer/block/FluidRenderer.d.ts'
import type { FluidStateModelSet } from '../../../../../../net/minecraft/client/renderer/block/FluidStateModelSet.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { FluidState } from '../../../../../../net/minecraft/world/level/material/FluidState.d.ts'
export class FluidRendererImpl extends FluidRenderer implements VertexEncoderInterface {
    constructor(arg0: ColorProviderRegistry, arg1: LightPipelineProvider)
    // private colorProviderRegistry: ColorProviderRegistry;
    // private defaultContext: FluidRendererImpl$DefaultRenderContext;
    // private defaultRenderer: DefaultFluidRenderer;
    // private fluidRenderer: FluidRenderer_2;
    // private fluidStates: FluidStateModelSet;
    beginBlock(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
    overrideBlock(arg0: number): void;
    render(arg0: LevelSlice, arg1: BlockState, arg2: FluidState, arg3: BlockPos, arg4: BlockPos, arg5: TranslucentGeometryCollector, arg6: ChunkBuildBuffers): void;
    restoreBlock(): void;
}