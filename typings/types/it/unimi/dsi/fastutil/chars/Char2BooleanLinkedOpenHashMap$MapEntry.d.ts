import type { Char2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2BooleanMap$Entry.d.ts'
import type { CharBooleanPair } from '../../../../../it/unimi/dsi/fastutil/chars/CharBooleanPair.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../java/lang/Comparable.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Char2BooleanLinkedOpenHashMap$MapEntry extends Object implements Char2BooleanMap$Entry, CharBooleanPair, Map$Entry<string, boolean> {
    static comparingByKey<K extends Comparable<Object>, V extends unknown>(): (param0: Map$Entry<K, V>, param1: Map$Entry<K, V>) => number;
    static comparingByKey<K extends unknown, V extends unknown>(paramarg0: (param0: Object, param1: Object) => number): (param0: Map$Entry<K, V>, param1: Map$Entry<K, V>) => number;
    static comparingByValue<K extends unknown, V extends Comparable<Object>>(): (param0: Map$Entry<K, V>, param1: Map$Entry<K, V>) => number;
    static comparingByValue<K extends unknown, V extends unknown>(paramarg0: (param0: Object, param1: Object) => number): (param0: Map$Entry<K, V>, param1: Map$Entry<K, V>) => number;
    static copyOf<K extends unknown, V extends unknown>(paramarg0: Map$Entry<K, V>): Map$Entry<K, V>;
    static lexComparator(): (param0: CharBooleanPair, param1: CharBooleanPair) => number;
    static of(paramarg0: string, paramarg1: boolean): CharBooleanPair;
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    // private index: number;
    equals(arg0: Object | null): boolean;
    first(): string;
    first(arg0: string): CharBooleanPair;
    firstChar(): string;
    getBooleanValue(): boolean;
    getCharKey(): string;
    hashCode(): number;
    key(): string;
    key(arg0: string): CharBooleanPair;
    keyChar(): string;
    left(): string;
    left(arg0: string): CharBooleanPair;
    leftChar(): string;
    right(): boolean;
    right(arg0: boolean): CharBooleanPair;
    rightBoolean(): boolean;
    second(): boolean;
    second(arg0: boolean): CharBooleanPair;
    secondBoolean(): boolean;
    setValue(arg0: boolean): boolean;
    toString(): string;
    value(): boolean;
    value(arg0: boolean): CharBooleanPair;
    valueBoolean(): boolean;
}