import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { BlockDisplayContext } from '../../../../../../../../net/minecraft/client/renderer/block/model/BlockDisplayContext.d.ts'
import type { BlockState } from '../../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export interface SelectBlockModelProperty<T extends Object | number | string | boolean> extends Object{
    get(blockState: BlockState, displayContext: BlockDisplayContext): T;
}