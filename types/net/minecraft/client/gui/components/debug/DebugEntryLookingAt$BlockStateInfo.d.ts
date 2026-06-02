import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { DebugEntryLookingAt$DebugEntryLookingAtState } from '../../../../../../net/minecraft/client/gui/components/debug/DebugEntryLookingAt$DebugEntryLookingAtState.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { TypedInstance } from '../../../../../../net/minecraft/core/TypedInstance.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Entity } from '../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { Level } from '../../../../../../net/minecraft/world/level/Level.d.ts'
import type { Block } from '../../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { HitResult } from '../../../../../../net/minecraft/world/phys/HitResult.d.ts'
export class DebugEntryLookingAt$BlockStateInfo extends DebugEntryLookingAt$DebugEntryLookingAtState<Block, BlockState> {
    static addTagEntries(paramresult: string[], paraminstance: TypedInstance<Object>): void;
    constructor()
    getHitResult(cameraEntity: Entity): HitResult;
    getInstance(level: Level, pos: BlockPos): BlockState;
    group(): Identifier;
}