import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { DebugEntryLookingAt$DebugEntryLookingAtTags } from '../../../../../../net/minecraft/client/gui/components/debug/DebugEntryLookingAt$DebugEntryLookingAtTags.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { TypedInstance } from '../../../../../../net/minecraft/core/TypedInstance.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Entity } from '../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { Level } from '../../../../../../net/minecraft/world/level/Level.d.ts'
import type { FluidState } from '../../../../../../net/minecraft/world/level/material/FluidState.d.ts'
import type { HitResult } from '../../../../../../net/minecraft/world/phys/HitResult.d.ts'
export class DebugEntryLookingAt$FluidTagInfo extends DebugEntryLookingAt$DebugEntryLookingAtTags<FluidState> {
    static addTagEntries(paramresult: string[], paraminstance: TypedInstance<Object>): void;
    constructor()
    getHitResult(cameraEntity: Entity): HitResult;
    getInstance(level: Level, pos: BlockPos): FluidState;
    group(): Identifier;
}