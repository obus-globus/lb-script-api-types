import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { DebugEntryLookingAt } from '../../../../../../net/minecraft/client/gui/components/debug/DebugEntryLookingAt.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { TypedInstance } from '../../../../../../net/minecraft/core/TypedInstance.d.ts'
import type { Level } from '../../../../../../net/minecraft/world/level/Level.d.ts'
export abstract class DebugEntryLookingAt$DebugEntryLookingAtTags<T extends TypedInstance<Object>> extends DebugEntryLookingAt {
    static addTagEntries(paramresult: string[], paraminstance: TypedInstance<Object>): void;
    constructor()
    extractInfo(result: string[], level: Level, pos: BlockPos): void;
    getInstance(level: Level, pos: BlockPos): T;
}