import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { BlockState } from '../../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export interface ConditionalBlockModelProperty extends Object{
    get(state: BlockState): boolean;
}