import type { ImmutableList$Builder } from '../../../../com/google/common/collect/ImmutableList$Builder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Weighted } from '../../../../net/minecraft/util/random/Weighted.d.ts'
import type { WeightedList } from '../../../../net/minecraft/util/random/WeightedList.d.ts'
export class WeightedList$Builder<E extends Object | number | string | boolean> extends Object {
    constructor()
    // private result: ImmutableList$Builder<Weighted<E>>;
    add(item: E): WeightedList$Builder<E>;
    add(item: E, weight: number): WeightedList$Builder<E>;
    build(): WeightedList<E>;
}