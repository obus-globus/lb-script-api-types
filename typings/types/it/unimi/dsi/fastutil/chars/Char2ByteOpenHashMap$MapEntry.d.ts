import type { Char2ByteMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ByteMap$Entry.d.ts'
import type { CharBytePair } from '../../../../../it/unimi/dsi/fastutil/chars/CharBytePair.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../java/lang/Comparable.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Char2ByteOpenHashMap$MapEntry extends Object implements Char2ByteMap$Entry, CharBytePair, Map$Entry<string, number> {
    static comparingByKey<K extends Comparable<Object>, V extends unknown>(): (param0: Map$Entry<K, V>, param1: Map$Entry<K, V>) => number;
    static comparingByKey<K extends unknown, V extends unknown>(paramarg0: (param0: Object, param1: Object) => number): (param0: Map$Entry<K, V>, param1: Map$Entry<K, V>) => number;
    static comparingByValue<K extends unknown, V extends Comparable<Object>>(): (param0: Map$Entry<K, V>, param1: Map$Entry<K, V>) => number;
    static comparingByValue<K extends unknown, V extends unknown>(paramarg0: (param0: Object, param1: Object) => number): (param0: Map$Entry<K, V>, param1: Map$Entry<K, V>) => number;
    static copyOf<K extends unknown, V extends unknown>(paramarg0: Map$Entry<K, V>): Map$Entry<K, V>;
    static lexComparator(): (param0: CharBytePair, param1: CharBytePair) => number;
    static of(paramarg0: string, paramarg1: number): CharBytePair;
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    // private index: number;
    equals(arg0: Object | null): boolean;
    first(): string;
    first(arg0: string): CharBytePair;
    firstChar(): string;
    getByteValue(): number;
    getCharKey(): string;
    hashCode(): number;
    key(): string;
    key(arg0: string): CharBytePair;
    keyChar(): string;
    left(): string;
    left(arg0: string): CharBytePair;
    leftChar(): string;
    right(): number;
    right(arg0: number): CharBytePair;
    rightByte(): number;
    second(): number;
    second(arg0: number): CharBytePair;
    secondByte(): number;
    setValue(arg0: number): number;
    toString(): string;
    value(): number;
    value(arg0: number): CharBytePair;
    valueByte(): number;
}