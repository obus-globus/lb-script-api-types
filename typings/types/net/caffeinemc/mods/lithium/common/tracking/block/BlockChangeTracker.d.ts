import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BlockListeningSection } from '../../../../../../../net/caffeinemc/mods/lithium/common/block/BlockListeningSection.d.ts'
import type { SectionPos } from '../../../../../../../net/minecraft/core/SectionPos.d.ts'
import type { BlockState } from '../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export interface BlockChangeTracker extends Object{
    onChunkSectionInvalidated(arg0: SectionPos): void;
    setChanged(arg0: BlockListeningSection, arg1: number, arg2: number, arg3: number, arg4: BlockState, arg5: BlockState): boolean;
}