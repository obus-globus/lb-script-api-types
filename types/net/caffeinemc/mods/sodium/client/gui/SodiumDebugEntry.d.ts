import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { DebugEntryCategory } from '../../../../../../net/minecraft/client/gui/components/debug/DebugEntryCategory.d.ts'
import type { DebugScreenDisplayer } from '../../../../../../net/minecraft/client/gui/components/debug/DebugScreenDisplayer.d.ts'
import type { DebugScreenEntry } from '../../../../../../net/minecraft/client/gui/components/debug/DebugScreenEntry.d.ts'
import type { Level } from '../../../../../../net/minecraft/world/level/Level.d.ts'
import type { LevelChunk } from '../../../../../../net/minecraft/world/level/chunk/LevelChunk.d.ts'
export class SodiumDebugEntry extends Object implements DebugScreenEntry {
    constructor(arg0: boolean)
    // private verbose: boolean;
    category(): DebugEntryCategory;
    display(arg0: DebugScreenDisplayer, arg1: Level, arg2: LevelChunk, arg3: LevelChunk): void;
    isAllowed(reducedDebugInfo: boolean): boolean;
}