import type { ImmutableMapEntry } from '../../../../com/google/common/collect/ImmutableMapEntry.d.ts'
import type { ImmutableMapEntry$NonTerminalImmutableMapEntry } from '../../../../com/google/common/collect/ImmutableMapEntry$NonTerminalImmutableMapEntry.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ImmutableMapEntry$NonTerminalImmutableBiMapEntry<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends ImmutableMapEntry$NonTerminalImmutableMapEntry<K, V> {
    constructor(key: K, value: V, nextInKeyBucket: ImmutableMapEntry<K, V>, nextInValueBucket: ImmutableMapEntry<K, V>)
    // private nextInValueBucket: ImmutableMapEntry<K, V>;
    getNextInValueBucket(): ImmutableMapEntry<K, V>;
}