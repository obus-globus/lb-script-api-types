import type { AbstractMap$SimpleImmutableEntry } from '../../../../java/util/AbstractMap$SimpleImmutableEntry.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ImmutableMapEntry<K extends unknown, V extends unknown> extends AbstractMap$SimpleImmutableEntry<K, V> {
    constructor(key: K, value: V)
    readonly key: K;
    readonly value: V;
    getNextInKeyBucket(): ImmutableMapEntry<K, V>;
    getNextInValueBucket(): ImmutableMapEntry<K, V>;
    isReusable(): boolean;
    setValue(value: V): V;
}