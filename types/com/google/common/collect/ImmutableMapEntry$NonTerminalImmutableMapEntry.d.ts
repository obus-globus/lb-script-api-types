import type { ImmutableMapEntry } from '../../../../com/google/common/collect/ImmutableMapEntry.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ImmutableMapEntry$NonTerminalImmutableMapEntry<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends ImmutableMapEntry<K, V> {
    constructor(key: K, value: V, nextInKeyBucket: ImmutableMapEntry<K, V>)
    // private nextInKeyBucket: ImmutableMapEntry<K, V>;
    getNextInKeyBucket(): ImmutableMapEntry<K, V>;
    isReusable(): boolean;
}