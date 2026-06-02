import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { DebugEntryCategory } from '../../../../../../net/minecraft/client/gui/components/debug/DebugEntryCategory.d.ts'
import type { DebugEntryMemory$AllocationRateCalculator } from '../../../../../../net/minecraft/client/gui/components/debug/DebugEntryMemory$AllocationRateCalculator.d.ts'
import type { DebugScreenDisplayer } from '../../../../../../net/minecraft/client/gui/components/debug/DebugScreenDisplayer.d.ts'
import type { DebugScreenEntry } from '../../../../../../net/minecraft/client/gui/components/debug/DebugScreenEntry.d.ts'
import type { Level } from '../../../../../../net/minecraft/world/level/Level.d.ts'
import type { LevelChunk } from '../../../../../../net/minecraft/world/level/chunk/LevelChunk.d.ts'
export class DebugEntryMemory extends Object implements DebugScreenEntry {
    constructor()
    // private allocationRateCalculator: DebugEntryMemory$AllocationRateCalculator;
    category(): DebugEntryCategory;
    display(displayer: DebugScreenDisplayer, serverOrClientLevel: Level, clientChunk: LevelChunk, serverChunk: LevelChunk): void;
    isAllowed(reducedDebugInfo: boolean): boolean;
    isAllowed(reducedDebugInfo: boolean): boolean;
}