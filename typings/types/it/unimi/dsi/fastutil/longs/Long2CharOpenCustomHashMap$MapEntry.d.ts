import type { Long2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2CharMap$Entry.d.ts'
import type { LongCharPair } from '../../../../../it/unimi/dsi/fastutil/longs/LongCharPair.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../java/lang/Comparable.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Long2CharOpenCustomHashMap$MapEntry extends Object implements Long2CharMap$Entry, LongCharPair, Map$Entry<number, string> {
    static comparingByKey<K extends Comparable<Object>, V extends unknown>(): (param0: Map$Entry<K, V>, param1: Map$Entry<K, V>) => number;
    static comparingByKey<K extends unknown, V extends unknown>(paramarg0: (param0: Object, param1: Object) => number): (param0: Map$Entry<K, V>, param1: Map$Entry<K, V>) => number;
    static comparingByValue<K extends unknown, V extends Comparable<Object>>(): (param0: Map$Entry<K, V>, param1: Map$Entry<K, V>) => number;
    static comparingByValue<K extends unknown, V extends unknown>(paramarg0: (param0: Object, param1: Object) => number): (param0: Map$Entry<K, V>, param1: Map$Entry<K, V>) => number;
    static copyOf<K extends unknown, V extends unknown>(paramarg0: Map$Entry<K, V>): Map$Entry<K, V>;
    static lexComparator(): (param0: LongCharPair, param1: LongCharPair) => number;
    static of(paramarg0: number, paramarg1: string): LongCharPair;
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    // private index: number;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): LongCharPair;
    firstLong(): number;
    getCharValue(): string;
    getLongKey(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): LongCharPair;
    keyLong(): number;
    left(): number;
    left(arg0: number): LongCharPair;
    leftLong(): number;
    right(): string;
    right(arg0: string): LongCharPair;
    rightChar(): string;
    second(): string;
    second(arg0: string): LongCharPair;
    secondChar(): string;
    setValue(arg0: string): string;
    toString(): string;
    value(): string;
    value(arg0: string): LongCharPair;
    valueChar(): string;
}