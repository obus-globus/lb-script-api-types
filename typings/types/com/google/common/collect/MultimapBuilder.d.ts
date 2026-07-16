import type { Multimap } from '../../../../com/google/common/collect/Multimap.d.ts'
import type { MultimapBuilder$MultimapBuilderWithKeys } from '../../../../com/google/common/collect/MultimapBuilder$MultimapBuilderWithKeys.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
export abstract class MultimapBuilder<K0 extends unknown, V0 extends unknown> extends Object {
    static enumKeys(paramkeyClass: Class<Object>): MultimapBuilder$MultimapBuilderWithKeys<Object>;
    static hashKeys(): MultimapBuilder$MultimapBuilderWithKeys<Object>;
    static hashKeys(paramexpectedKeys: number): MultimapBuilder$MultimapBuilderWithKeys<Object>;
    static linkedHashKeys(): MultimapBuilder$MultimapBuilderWithKeys<Object>;
    static linkedHashKeys(paramexpectedKeys: number): MultimapBuilder$MultimapBuilderWithKeys<Object>;
    static treeKeys(paramcomparator: (param0: Object | null, param1: Object | null) => number): MultimapBuilder$MultimapBuilderWithKeys<Object>;
    static treeKeys(): MultimapBuilder$MultimapBuilderWithKeys<Comparable<Object>>;
    constructor(arg0: MultimapBuilder$MultimapBuilderWithKeys<Object>)
    build<K extends K0, V extends V0>(): Multimap<K, V>;
    build<K extends K0, V extends V0>(multimap: Multimap<K, V>): Multimap<K, V>;
}