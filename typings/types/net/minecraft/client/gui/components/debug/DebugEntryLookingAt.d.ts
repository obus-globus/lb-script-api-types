import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { DebugEntryCategory } from '../../../../../../net/minecraft/client/gui/components/debug/DebugEntryCategory.d.ts'
import type { DebugScreenDisplayer } from '../../../../../../net/minecraft/client/gui/components/debug/DebugScreenDisplayer.d.ts'
import type { DebugScreenEntry } from '../../../../../../net/minecraft/client/gui/components/debug/DebugScreenEntry.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { TypedInstance } from '../../../../../../net/minecraft/core/TypedInstance.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Entity } from '../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { Level } from '../../../../../../net/minecraft/world/level/Level.d.ts'
import type { LevelChunk } from '../../../../../../net/minecraft/world/level/chunk/LevelChunk.d.ts'
import type { HitResult } from '../../../../../../net/minecraft/world/phys/HitResult.d.ts'
export abstract class DebugEntryLookingAt extends Object implements DebugScreenEntry {
    static addTagEntries(paramresult: string[], paraminstance: TypedInstance<Object>): void;
    constructor()
    category(): DebugEntryCategory;
    display(displayer: DebugScreenDisplayer, serverOrClientLevel: Level, clientChunk: LevelChunk, serverChunk: LevelChunk): void;
    extractInfo(result: string[], level: Level, pos: BlockPos): void;
    getHitResult(cameraEntity: Entity): HitResult;
    group(): Identifier;
    isAllowed(reducedDebugInfo: boolean): boolean;
}