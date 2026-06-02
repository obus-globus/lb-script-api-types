import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { DoubleBlockCombiner$Combiner } from '../../../../../net/minecraft/world/level/block/DoubleBlockCombiner$Combiner.d.ts'
export interface DoubleBlockCombiner$NeighborCombineResult<S extends Object | number | string | boolean> extends Object{
    apply<T extends Object | number | string | boolean>(callback: DoubleBlockCombiner$Combiner<S, T>): T;
}