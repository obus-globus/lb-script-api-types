import type { Char2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2CharMap$Entry.d.ts'
import type { CharCharPair } from '../../../../../it/unimi/dsi/fastutil/chars/CharCharPair.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../java/lang/Comparable.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Char2CharOpenCustomHashMap$MapEntry extends Object implements Char2CharMap$Entry, CharCharPair, Map$Entry<string, string> {
    static comparingByKey<K extends Comparable<Object>, V extends unknown>(): (param0: Map$Entry<K, V>, param1: Map$Entry<K, V>) => number;
    static comparingByKey<K extends unknown, V extends unknown>(paramarg0: (param0: Object, param1: Object) => number): (param0: Map$Entry<K, V>, param1: Map$Entry<K, V>) => number;
    static comparingByValue<K extends unknown, V extends Comparable<Object>>(): (param0: Map$Entry<K, V>, param1: Map$Entry<K, V>) => number;
    static comparingByValue<K extends unknown, V extends unknown>(paramarg0: (param0: Object, param1: Object) => number): (param0: Map$Entry<K, V>, param1: Map$Entry<K, V>) => number;
    static copyOf<K extends unknown, V extends unknown>(paramarg0: Map$Entry<K, V>): Map$Entry<K, V>;
    static lexComparator(): (param0: CharCharPair, param1: CharCharPair) => number;
    static of(paramarg0: string, paramarg1: string): CharCharPair;
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    // private index: number;
    equals(arg0: Object | null): boolean;
    first(): string;
    first(arg0: string): CharCharPair;
    firstChar(): string;
    getCharKey(): string;
    getCharValue(): string;
    hashCode(): number;
    key(): string;
    key(arg0: string): CharCharPair;
    keyChar(): string;
    left(): string;
    left(arg0: string): CharCharPair;
    leftChar(): string;
    right(): string;
    right(arg0: string): CharCharPair;
    rightChar(): string;
    second(): string;
    second(arg0: string): CharCharPair;
    secondChar(): string;
    setValue(arg0: string): string;
    toString(): string;
    value(): string;
    value(arg0: string): CharCharPair;
    valueChar(): string;
}