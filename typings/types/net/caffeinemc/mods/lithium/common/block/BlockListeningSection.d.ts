import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { SectionedBlockChangeTracker } from '../../../../../../net/caffeinemc/mods/lithium/common/tracking/block/SectionedBlockChangeTracker.d.ts'
import type { Level } from '../../../../../../net/minecraft/world/level/Level.d.ts'
export interface BlockListeningSection extends Object{
    lithium$addToCallback(arg0: SectionedBlockChangeTracker, arg1: number, arg2: Level): void;
    lithium$removeFromCallback(arg0: SectionedBlockChangeTracker): void;
}