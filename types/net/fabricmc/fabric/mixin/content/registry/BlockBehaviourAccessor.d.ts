import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export interface BlockBehaviourAccessor extends Object{
    callIsRandomlyTicking(arg0: BlockState): boolean;
}