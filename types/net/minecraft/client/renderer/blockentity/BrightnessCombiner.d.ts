import type { Int2IntFunction } from '../../../../../it/unimi/dsi/fastutil/ints/Int2IntFunction.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { DoubleBlockCombiner$Combiner } from '../../../../../net/minecraft/world/level/block/DoubleBlockCombiner$Combiner.d.ts'
import type { BlockEntity } from '../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
export class BrightnessCombiner<S extends BlockEntity> extends Object implements DoubleBlockCombiner$Combiner<S, (param0: number) => kotlin.Int> {
    constructor()
    acceptDouble(first: S, second: S): (param0: number) => kotlin.Int;
    acceptNone(): (param0: number) => kotlin.Int;
    acceptSingle(single: S): (param0: number) => kotlin.Int;
}