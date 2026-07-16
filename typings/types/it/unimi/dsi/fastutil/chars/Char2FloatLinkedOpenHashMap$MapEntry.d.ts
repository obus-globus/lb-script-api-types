import type { Char2FloatMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2FloatMap$Entry.d.ts'
import type { CharFloatPair } from '../../../../../it/unimi/dsi/fastutil/chars/CharFloatPair.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../java/lang/Comparable.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Char2FloatLinkedOpenHashMap$MapEntry extends Object implements Char2FloatMap$Entry, CharFloatPair, Map$Entry<string, number> {
    static comparingByKey<K extends Comparable<Object>, V extends unknown>(): (param0: Map$Entry<K, V>, param1: Map$Entry<K, V>) => number;
    static comparingByKey<K extends unknown, V extends unknown>(paramarg0: (param0: Object, param1: Object) => number): (param0: Map$Entry<K, V>, param1: Map$Entry<K, V>) => number;
    static comparingByValue<K extends unknown, V extends Comparable<Object>>(): (param0: Map$Entry<K, V>, param1: Map$Entry<K, V>) => number;
    static comparingByValue<K extends unknown, V extends unknown>(paramarg0: (param0: Object, param1: Object) => number): (param0: Map$Entry<K, V>, param1: Map$Entry<K, V>) => number;
    static copyOf<K extends unknown, V extends unknown>(paramarg0: Map$Entry<K, V>): Map$Entry<K, V>;
    static lexComparator(): (param0: CharFloatPair, param1: CharFloatPair) => number;
    static of(paramarg0: string, paramarg1: number): CharFloatPair;
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    // private index: number;
    equals(arg0: Object | null): boolean;
    first(): string;
    first(arg0: string): CharFloatPair;
    firstChar(): string;
    getCharKey(): string;
    getFloatValue(): number;
    hashCode(): number;
    key(): string;
    key(arg0: string): CharFloatPair;
    keyChar(): string;
    left(): string;
    left(arg0: string): CharFloatPair;
    leftChar(): string;
    right(): number;
    right(arg0: number): CharFloatPair;
    rightFloat(): number;
    second(): number;
    second(arg0: number): CharFloatPair;
    secondFloat(): number;
    setValue(arg0: number): number;
    toString(): string;
    value(): number;
    value(arg0: number): CharFloatPair;
    valueFloat(): number;
}