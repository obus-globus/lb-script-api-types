import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
import type { Comparable } from '../../../../../java/lang/Comparable.d.ts'
import type { Iterator } from '../../../../../java/util/Iterator.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class ReadOnlyHttpHeaders$ReadOnlyIterator extends Object implements Iterator<Map$Entry<CharSequence, CharSequence>>, Map$Entry<CharSequence, CharSequence> {
    static comparingByKey<K extends Comparable<Object>, V extends unknown>(): (param0: Map$Entry<K, V>, param1: Map$Entry<K, V>) => number;
    static comparingByKey<K extends unknown, V extends unknown>(paramarg0: (param0: Object, param1: Object) => number): (param0: Map$Entry<K, V>, param1: Map$Entry<K, V>) => number;
    static comparingByValue<K extends unknown, V extends Comparable<Object>>(): (param0: Map$Entry<K, V>, param1: Map$Entry<K, V>) => number;
    static comparingByValue<K extends unknown, V extends unknown>(paramarg0: (param0: Object, param1: Object) => number): (param0: Map$Entry<K, V>, param1: Map$Entry<K, V>) => number;
    static copyOf<K extends unknown, V extends unknown>(paramarg0: Map$Entry<K, V>): Map$Entry<K, V>;
    constructor(null_: (Object | null)[], arg1: any)
    readonly key: CharSequence;
    readonly key: CharSequence;
    // private nextNameIndex: number;
    readonly value: CharSequence;
    readonly value: CharSequence;
    forEachRemaining(arg0: (param0: Map$Entry<CharSequence, CharSequence>) => void): void;
    hasNext(): boolean;
    next(): Map$Entry<CharSequence, CharSequence>;
    remove(): void;
    setValue(arg0: CharSequence): CharSequence;
    toString(): string;
}