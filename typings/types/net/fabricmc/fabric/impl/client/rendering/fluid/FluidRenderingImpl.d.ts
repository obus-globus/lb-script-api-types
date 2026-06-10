import type { VertexConsumer } from '../../../../../../../com/mojang/blaze3d/vertex/VertexConsumer.d.ts'
import type { ScopedValue } from '../../../../../../../java/lang/ScopedValue.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { FluidRenderHandler } from '../../../../../../../net/fabricmc/fabric/api/client/render/fluid/v1/FluidRenderHandler.d.ts'
import type { FluidRendering$DefaultRenderer } from '../../../../../../../net/fabricmc/fabric/api/client/render/fluid/v1/FluidRendering$DefaultRenderer.d.ts'
import type { BlockAndTintGetter } from '../../../../../../../net/minecraft/client/renderer/block/BlockAndTintGetter.d.ts'
import type { FluidRenderer } from '../../../../../../../net/minecraft/client/renderer/block/FluidRenderer.d.ts'
import type { FluidRenderer$Output } from '../../../../../../../net/minecraft/client/renderer/block/FluidRenderer$Output.d.ts'
import type { ChunkSectionLayer } from '../../../../../../../net/minecraft/client/renderer/chunk/ChunkSectionLayer.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockState } from '../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { FluidState } from '../../../../../../../net/minecraft/world/level/material/FluidState.d.ts'
export class FluidRenderingImpl extends Object {
    static IS_RENDERING_VANILLA_DEFAULT: ScopedValue<void>;
    static render(paramarg0: FluidRenderer, paramarg1: FluidRenderHandler, paramarg2: BlockAndTintGetter, paramarg3: BlockPos, paramarg4: (param0: ChunkSectionLayer) => VertexConsumer, paramarg5: BlockState, paramarg6: FluidState, paramarg7: FluidRendering$DefaultRenderer): void;
    static renderDefault(paramarg0: FluidRenderer, paramarg1: FluidRenderHandler, paramarg2: BlockAndTintGetter, paramarg3: BlockPos, paramarg4: (param0: ChunkSectionLayer) => VertexConsumer, paramarg5: BlockState, paramarg6: FluidState): void;
    static renderVanillaDefault(paramarg0: FluidRenderer, paramarg1: BlockAndTintGetter, paramarg2: BlockPos, paramarg3: (param0: ChunkSectionLayer) => VertexConsumer, paramarg4: BlockState, paramarg5: FluidState): void;
    constructor()
}