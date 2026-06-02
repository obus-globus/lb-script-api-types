import type { BinaryOperator } from '../../../../java/util/function/BinaryOperator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class CollectCollectors$EnumMapAccumulator<K extends Enum<K>, V extends Object | number | string | boolean> extends Object {
    constructor(mergeFunction: (param0: V, param1: Object | null) => unknown)
    // private map: Map<K, V>;
    // private mergeFunction: (param0: V, param1: Object | null) => unknown;
    combine(other: CollectCollectors$EnumMapAccumulator<K, V>): CollectCollectors$EnumMapAccumulator<K, V>;
    put(key: K, value: V): void;
    toImmutableMap(): Map<K, V>;
}