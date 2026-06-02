import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BlockListeningSection } from '../../../../../../../net/caffeinemc/mods/lithium/common/block/BlockListeningSection.d.ts'
import type { BlockChangeTracker } from '../../../../../../../net/caffeinemc/mods/lithium/common/tracking/block/BlockChangeTracker.d.ts'
import type { WorldSectionBox } from '../../../../../../../net/caffeinemc/mods/lithium/common/util/tuples/WorldSectionBox.d.ts'
import type { SectionPos } from '../../../../../../../net/minecraft/core/SectionPos.d.ts'
import type { Level } from '../../../../../../../net/minecraft/world/level/Level.d.ts'
import type { BlockState } from '../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { AABB } from '../../../../../../../net/minecraft/world/phys/AABB.d.ts'
export class SectionedBlockChangeTracker extends Object implements BlockChangeTracker {
    static registerAt(paramarg0: Level, paramarg1: AABB): SectionedBlockChangeTracker;
    constructor(arg0: WorldSectionBox)
    // private isListeningToAll: boolean;
    // private maxChangeTime: number;
    // private sectionsNotListeningTo: SectionPos[];
    // private sectionsUnsubscribed: BlockListeningSection[];
    // private timesRegistered: number;
    trackedWorldSections: WorldSectionBox;
    equals(arg0: Object | null): boolean;
    getWorldTime(): number;
    hashCode(): number;
    isUnchangedSince(arg0: number): boolean;
    listenToAllSections(): void;
    matchesMovedBox(arg0: AABB): boolean;
    onChunkSectionInvalidated(arg0: SectionPos): void;
    register(): void;
    setChanged(arg0: number): void;
    setChanged(arg0: BlockListeningSection, arg1: number, arg2: number, arg3: number, arg4: BlockState, arg5: BlockState): boolean;
    unregister(): void;
}