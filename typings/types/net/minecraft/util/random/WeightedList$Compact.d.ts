import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Weighted } from '../../../../net/minecraft/util/random/Weighted.d.ts'
import type { WeightedList$Selector } from '../../../../net/minecraft/util/random/WeightedList$Selector.d.ts'
export class WeightedList$Compact<E extends Object | number | string | boolean> extends Object implements WeightedList$Selector<E> {
    private constructor(entries: Weighted<E>[])
    // private entries: Weighted<Object>[];
    get(selection: number): E;
}