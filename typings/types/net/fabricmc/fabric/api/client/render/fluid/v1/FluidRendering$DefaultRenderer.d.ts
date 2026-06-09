import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { FluidRenderHandler } from '../../../../../../../../net/fabricmc/fabric/api/client/render/fluid/v1/FluidRenderHandler.d.ts'
import type { BlockAndTintGetter } from '../../../../../../../../net/minecraft/client/renderer/block/BlockAndTintGetter.d.ts'
import type { FluidRenderer } from '../../../../../../../../net/minecraft/client/renderer/block/FluidRenderer.d.ts'
import type { FluidRenderer$Output } from '../../../../../../../../net/minecraft/client/renderer/block/FluidRenderer$Output.d.ts'
import type { ChunkSectionLayer } from '../../../../../../../../net/minecraft/client/renderer/chunk/ChunkSectionLayer.d.ts'
import type { BlockPos } from '../../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockState } from '../../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { FluidState } from '../../../../../../../../net/minecraft/world/level/material/FluidState.d.ts'
export interface FluidRendering$DefaultRenderer extends Object {
    render(arg0: FluidRenderer, arg1: FluidRenderHandler, arg2: BlockAndTintGetter, arg3: BlockPos, arg4: (param0: ChunkSectionLayer) => com.mojang.blaze3d.vertex.VertexConsumer, arg5: BlockState, arg6: FluidState): void;
}