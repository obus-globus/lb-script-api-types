import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { DebugEntryCategory } from '../../../../../../net/minecraft/client/gui/components/debug/DebugEntryCategory.d.ts'
import type { DebugScreenDisplayer } from '../../../../../../net/minecraft/client/gui/components/debug/DebugScreenDisplayer.d.ts'
import type { DebugScreenEntry } from '../../../../../../net/minecraft/client/gui/components/debug/DebugScreenEntry.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { Level } from '../../../../../../net/minecraft/world/level/Level.d.ts'
import type { LevelChunk } from '../../../../../../net/minecraft/world/level/chunk/LevelChunk.d.ts'
export class DebugEntryChunkGeneration extends Object implements DebugScreenEntry {
    constructor()
    // private lastPos: BlockPos;
    // private result: string[];
    category(): DebugEntryCategory;
    display(displayer: DebugScreenDisplayer, serverOrClientLevel: Level, clientChunk: LevelChunk, serverChunk: LevelChunk): void;
    isAllowed(reducedDebugInfo: boolean): boolean;
    // private update(serverChunk: LevelChunk, feetPos: BlockPos, serverLevel: ServerLevel): void;
}