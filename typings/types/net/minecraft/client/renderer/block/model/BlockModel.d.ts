import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockModelRenderState } from '../../../../../../net/minecraft/client/renderer/block/BlockModelRenderState.d.ts'
import type { BlockDisplayContext } from '../../../../../../net/minecraft/client/renderer/block/model/BlockDisplayContext.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export interface BlockModel extends Object{
    update(output: BlockModelRenderState, blockState: BlockState, displayContext: BlockDisplayContext, seed: number): void;
}