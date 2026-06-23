import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ImmutableMapEntry } from '../../../../../../../org/spongepowered/include/com/google/common/collect/ImmutableMapEntry.d.ts'
export class ImmutableMapEntry$NonTerminalImmutableMapEntry<K extends unknown, V extends unknown> extends ImmutableMapEntry<K, V> {
    constructor(arg0: K, arg1: V, arg2: ImmutableMapEntry<K, V>)
    // private nextInKeyBucket: ImmutableMapEntry<K, V>;
    getNextInKeyBucket(): ImmutableMapEntry<K, V>;
    isReusable(): boolean;
}