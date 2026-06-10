import type { Optional } from '../../../../../../../java/util/Optional.d.ts'
import type { Predicate } from '../../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { LivingEntity } from '../../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { LevelReader } from '../../../../../../../net/minecraft/world/level/LevelReader.d.ts'
import type { BlockState } from '../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class CommonBlockSearchesCheckAndCache extends Object {
    static blockPosFindClosestMatch(paramarg0: LevelReader, paramarg1: LivingEntity, paramarg2: number, paramarg3: number, paramarg4: (param0: BlockState) => boolean, paramarg5: boolean): Optional<BlockPos>;
    constructor()
}