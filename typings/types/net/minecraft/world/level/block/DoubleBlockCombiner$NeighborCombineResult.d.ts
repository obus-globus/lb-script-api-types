import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { DoubleBlockCombiner$Combiner } from '../../../../../net/minecraft/world/level/block/DoubleBlockCombiner$Combiner.d.ts'
export interface DoubleBlockCombiner$NeighborCombineResult<S extends unknown> extends Object{
    apply<T extends unknown>(callback: DoubleBlockCombiner$Combiner<S, T>): T;
}