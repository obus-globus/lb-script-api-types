import type { WeightedFairQueueByteDistributor$State } from '../../../../../io/netty/handler/codec/http2/WeightedFairQueueByteDistributor$State.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { ToDoubleFunction } from '../../../../../java/util/function/ToDoubleFunction.d.ts'
import type { ToIntFunction } from '../../../../../java/util/function/ToIntFunction.d.ts'
import type { ToLongFunction } from '../../../../../java/util/function/ToLongFunction.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../java/lang/Comparable.d.ts'
export class WeightedFairQueueByteDistributor$StateOnlyComparator extends Object implements Serializable, Comparator<WeightedFairQueueByteDistributor$State> {
    private constructor()
    compare(arg0: WeightedFairQueueByteDistributor$State, arg1: WeightedFairQueueByteDistributor$State): number;
    reversed(): (param0: WeightedFairQueueByteDistributor$State, param1: WeightedFairQueueByteDistributor$State) => number;
    thenComparing(arg0: (param0: WeightedFairQueueByteDistributor$State, param1: WeightedFairQueueByteDistributor$State) => number): (param0: WeightedFairQueueByteDistributor$State, param1: WeightedFairQueueByteDistributor$State) => number;
    thenComparing<U extends Comparable<U>>(arg0: (param0: WeightedFairQueueByteDistributor$State) => U): (param0: WeightedFairQueueByteDistributor$State, param1: WeightedFairQueueByteDistributor$State) => number;
    thenComparing<U extends unknown>(arg0: (param0: WeightedFairQueueByteDistributor$State) => U, arg1: (param0: U, param1: U) => number): (param0: WeightedFairQueueByteDistributor$State, param1: WeightedFairQueueByteDistributor$State) => number;
    thenComparingDouble(arg0: (param0: WeightedFairQueueByteDistributor$State) => number): (param0: WeightedFairQueueByteDistributor$State, param1: WeightedFairQueueByteDistributor$State) => number;
    thenComparingInt(arg0: (param0: WeightedFairQueueByteDistributor$State) => number): (param0: WeightedFairQueueByteDistributor$State, param1: WeightedFairQueueByteDistributor$State) => number;
    thenComparingLong(arg0: (param0: WeightedFairQueueByteDistributor$State) => number): (param0: WeightedFairQueueByteDistributor$State, param1: WeightedFairQueueByteDistributor$State) => number;
}