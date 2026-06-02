import type { Predicate } from '../../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { LevelReader } from '../../../../../../../net/minecraft/world/level/LevelReader.d.ts'
import type { BlockEntity } from '../../../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
import type { BlockState } from '../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class BlockInWorld extends Object {
    static hasState(parampredicate: (param0: BlockState) => kotlin.Boolean): (param0: BlockInWorld) => kotlin.Boolean;
    constructor(level: LevelReader, pos: BlockPos, loadChunks: boolean)
    // private cachedEntity: boolean;
    readonly entity: BlockEntity;
    readonly level: LevelReader;
    // private loadChunks: boolean;
    readonly pos: BlockPos;
    readonly state: BlockState;
    getEntity(): BlockEntity;
    getLevel(): LevelReader;
    getPos(): BlockPos;
    getState(): BlockState;
}