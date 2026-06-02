import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { BlockAndTintGetter } from '../../../../../../../../net/minecraft/client/renderer/block/BlockAndTintGetter.d.ts'
import type { FluidRenderer } from '../../../../../../../../net/minecraft/client/renderer/block/FluidRenderer.d.ts'
import type { FluidRenderer$Output } from '../../../../../../../../net/minecraft/client/renderer/block/FluidRenderer$Output.d.ts'
import type { ChunkSectionLayer } from '../../../../../../../../net/minecraft/client/renderer/chunk/ChunkSectionLayer.d.ts'
import type { BlockPos } from '../../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockState } from '../../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { FluidState } from '../../../../../../../../net/minecraft/world/level/material/FluidState.d.ts'
export interface FluidRenderHandler extends Object{
    renderFluid(arg0: FluidRenderer, arg1: BlockPos, arg2: BlockAndTintGetter, arg3: (param0: ChunkSectionLayer) => com.mojang.blaze3d.vertex.VertexConsumer, arg4: BlockState, arg5: FluidState): void;
}