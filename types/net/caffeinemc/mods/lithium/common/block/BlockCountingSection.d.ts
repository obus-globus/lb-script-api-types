import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { TrackedBlockStatePredicate } from '../../../../../../net/caffeinemc/mods/lithium/common/block/TrackedBlockStatePredicate.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export interface BlockCountingSection extends Object{
    lithium$getCount(arg0: number): number;
    lithium$getCount(arg0: TrackedBlockStatePredicate): number;
    lithium$mayContainAny(arg0: TrackedBlockStatePredicate): boolean;
    lithium$trackBlockStateChange(arg0: BlockState, arg1: BlockState): void;
}