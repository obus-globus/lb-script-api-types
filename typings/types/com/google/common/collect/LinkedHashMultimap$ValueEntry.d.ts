import type { AbstractMap$SimpleImmutableEntry } from '../../../../java/util/AbstractMap$SimpleImmutableEntry.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class LinkedHashMultimap$ValueEntry<K extends unknown, V extends unknown> extends AbstractMap$SimpleImmutableEntry<K, V> {
    constructor(key: K, value: V, smearedValueHash: number, nextInValueBucket: LinkedHashMultimap$ValueEntry<K, V>)
    // private nextInValueBucket: LinkedHashMultimap$ValueEntry<K, V>;
    // private predecessorInMultimap: LinkedHashMultimap$ValueEntry<K, V>;
    // private predecessorInValueSet: LinkedHashMultimap$ValueEntry<K, V>;
    // private smearedValueHash: number;
    // private successorInMultimap: LinkedHashMultimap$ValueEntry<K, V>;
    // private successorInValueSet: LinkedHashMultimap$ValueEntry<K, V>;
    matchesValue(v: Object, smearedVHash: number): boolean;
}