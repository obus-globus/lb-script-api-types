import type { Pair } from '../../../../../it/unimi/dsi/fastutil/Pair.d.ts'
import type { Reference2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2CharMap$Entry.d.ts'
import type { ReferenceCharPair } from '../../../../../it/unimi/dsi/fastutil/objects/ReferenceCharPair.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../java/lang/Comparable.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Reference2CharOpenHashMap$MapEntry extends Object implements Reference2CharMap$Entry<K>, ReferenceCharPair<K>, Map$Entry<K, string> {
    static comparingByKey<K extends Comparable<Object>, V extends unknown>(): (param0: Map$Entry<K, V>, param1: Map$Entry<K, V>) => number;
    static comparingByKey<K extends unknown, V extends unknown>(paramarg0: (param0: Object, param1: Object) => number): (param0: Map$Entry<K, V>, param1: Map$Entry<K, V>) => number;
    static comparingByValue<K extends unknown, V extends Comparable<Object>>(): (param0: Map$Entry<K, V>, param1: Map$Entry<K, V>) => number;
    static comparingByValue<K extends unknown, V extends unknown>(paramarg0: (param0: Object, param1: Object) => number): (param0: Map$Entry<K, V>, param1: Map$Entry<K, V>) => number;
    static copyOf<K extends unknown, V extends unknown>(paramarg0: Map$Entry<K, V>): Map$Entry<K, V>;
    static of<K extends unknown>(paramarg0: K, paramarg1: string): ReferenceCharPair<K>;
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    // private index: number;
    readonly key: K;
    equals(arg0: Object | null): boolean;
    getCharValue(): string;
    hashCode(): number;
    left<K extends unknown>(): K;
    left<K extends unknown>(arg0: K): Pair<K, string>;
    right(): string;
    right<K extends unknown>(arg0: string): ReferenceCharPair<K>;
    rightChar(): string;
    second(): string;
    second<K extends unknown>(arg0: string): ReferenceCharPair<K>;
    secondChar(): string;
    setValue(arg0: string): string;
    toString(): string;
    value(): string;
    value<K extends unknown>(arg0: string): ReferenceCharPair<K>;
    valueChar(): string;
}