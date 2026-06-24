import type { Object } from '../../../java/lang/Object.d.ts'
import type { SectionUpdateTracker$SectionDirtyState } from '../../../net/minecraft/client/SectionUpdateTracker$SectionDirtyState.d.ts'
import type { ClientLevel } from '../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { SectionPos } from '../../../net/minecraft/core/SectionPos.d.ts'
import type { LevelHeightAccessor } from '../../../net/minecraft/world/level/LevelHeightAccessor.d.ts'
export class SectionUpdateTracker extends Object {
    constructor(levelHeightAccessor: LevelHeightAccessor, renderDistance: number)
    // private storage: SectionUpdateTracker$SectionDirtyState[];
    // private doesChunkExistAt(level: ClientLevel, sectionNode: number): boolean;
    getDirtyState(sectionNode: number): SectionUpdateTracker$SectionDirtyState;
    hasAllNeighbors(level: ClientLevel, sectionNode: number): boolean;
    repositionCamera(cameraSectionPos: SectionPos): void;
    setDirty(sectionX: number, sectionY: number, sectionZ: number, playerChanged: boolean): void;
    size(): number;
}