import type { MultimapBuilder$ListMultimapBuilder } from '../../../../com/google/common/collect/MultimapBuilder$ListMultimapBuilder.d.ts'
import type { MultimapBuilder$SetMultimapBuilder } from '../../../../com/google/common/collect/MultimapBuilder$SetMultimapBuilder.d.ts'
import type { MultimapBuilder$SortedSetMultimapBuilder } from '../../../../com/google/common/collect/MultimapBuilder$SortedSetMultimapBuilder.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export abstract class MultimapBuilder$MultimapBuilderWithKeys<K0 extends Object | number | string | boolean> extends Object {
    constructor()
    arrayListValues(): MultimapBuilder$ListMultimapBuilder<K0, Object>;
    arrayListValues(expectedValuesPerKey: number): MultimapBuilder$ListMultimapBuilder<K0, Object>;
    createMap<K extends K0, V extends Object | number | string | boolean>(): Map<K, V[]>;
    enumSetValues<V0 extends Enum<V0>>(valueClass: Class<V0>): MultimapBuilder$SetMultimapBuilder<K0, V0>;
    hashSetValues(): MultimapBuilder$SetMultimapBuilder<K0, Object>;
    hashSetValues(expectedValuesPerKey: number): MultimapBuilder$SetMultimapBuilder<K0, Object>;
    linkedHashSetValues(): MultimapBuilder$SetMultimapBuilder<K0, Object>;
    linkedHashSetValues(expectedValuesPerKey: number): MultimapBuilder$SetMultimapBuilder<K0, Object>;
    linkedListValues(): MultimapBuilder$ListMultimapBuilder<K0, Object>;
    treeSetValues(): MultimapBuilder$SortedSetMultimapBuilder<K0, Comparable<Object>>;
    treeSetValues<V0 extends Object | number | string | boolean>(comparator: (param0: Object) => boolean): MultimapBuilder$SortedSetMultimapBuilder<K0, V0>;
}