import type { Multimap } from '../../../../com/google/common/collect/Multimap.d.ts'
import type { MultimapBuilder$MultimapBuilderWithKeys } from '../../../../com/google/common/collect/MultimapBuilder$MultimapBuilderWithKeys.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export abstract class MultimapBuilder<K0 extends unknown, V0 extends unknown> extends Object {
    static enumKeys<K0 extends Enum<K0>>(paramkeyClass: Class<K0>): MultimapBuilder$MultimapBuilderWithKeys<K0>;
    static hashKeys(): MultimapBuilder$MultimapBuilderWithKeys<Object>;
    static hashKeys(paramexpectedKeys: number): MultimapBuilder$MultimapBuilderWithKeys<Object>;
    static linkedHashKeys(): MultimapBuilder$MultimapBuilderWithKeys<Object>;
    static linkedHashKeys(paramexpectedKeys: number): MultimapBuilder$MultimapBuilderWithKeys<Object>;
    static treeKeys<K0 extends unknown>(paramcomparator: (param0: K0, param1: K0) => number): MultimapBuilder$MultimapBuilderWithKeys<K0>;
    static treeKeys(): MultimapBuilder$MultimapBuilderWithKeys<Comparable<Object>>;
    constructor(arg0: MultimapBuilder$MultimapBuilderWithKeys<Object>)
    build<K extends K0, V extends V0>(): Multimap<K, V>;
    build<K extends K0, V extends V0>(multimap: Multimap<K, V>): Multimap<K, V>;
}