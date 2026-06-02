import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BlockListeningSection } from '../../../../../../../net/caffeinemc/mods/lithium/common/block/BlockListeningSection.d.ts'
import type { BlockChangeTracker } from '../../../../../../../net/caffeinemc/mods/lithium/common/tracking/block/BlockChangeTracker.d.ts'
import type { SectionPos } from '../../../../../../../net/minecraft/core/SectionPos.d.ts'
import type { Level } from '../../../../../../../net/minecraft/world/level/Level.d.ts'
import type { BlockState } from '../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class ChunkSectionChangeCallback extends Object {
    static create(paramarg0: number, paramarg1: Level): ChunkSectionChangeCallback;
    static init(): void;
    constructor(arg0: number)
    readonly sectionPos: number;
    // private trackers: BlockChangeTracker[];
    addTracker(arg0: BlockChangeTracker): void;
    getSectionPos(): number;
    getX(arg0: number): number;
    getY(arg0: number): number;
    getZ(arg0: number): number;
    onBlockChange(arg0: BlockListeningSection, arg1: number, arg2: number, arg3: number, arg4: BlockState, arg5: BlockState): void;
    onChunkSectionInvalidated(arg0: SectionPos): void;
    removeTracker(arg0: BlockChangeTracker): void;
}