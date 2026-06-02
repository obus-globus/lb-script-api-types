import type { Char2FloatMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2FloatMap$Entry.d.ts'
import type { CharFloatPair } from '../../../../../it/unimi/dsi/fastutil/chars/CharFloatPair.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Char2FloatOpenCustomHashMap$MapEntry extends Object implements Char2FloatMap$Entry, CharFloatPair, Map$Entry<string, number> {
    static comparingByKey(): (param0: Object | null) => kotlin.Boolean;
    static comparingByKey(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static comparingByValue(): (param0: Object | null) => kotlin.Boolean;
    static comparingByValue(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static copyOf(paramarg0: Map$Entry<Object, Object>): Map$Entry<Object, Object>;
    static lexComparator(): (param0: CharFloatPair) => kotlin.Boolean;
    static of(paramarg0: string, paramarg1: number): CharFloatPair;
    constructor(null_: Char2FloatOpenCustomHashMap$MapEntry)
    constructor(null_: Char2FloatOpenCustomHashMap$MapEntry, arg1: number)
    // private index: number;
    readonly key: string;
    readonly value: number;
    equals(arg0: Object | null): boolean;
    first(): string;
    first(arg0: string): CharFloatPair;
    first(arg0: string): CharFloatPair;
    firstChar(): string;
    getCharKey(): string;
    getFloatValue(): number;
    hashCode(): number;
    key(): string;
    key(arg0: string): CharFloatPair;
    key(arg0: string): CharFloatPair;
    keyChar(): string;
    left(): string;
    left(arg0: string): CharFloatPair;
    left(arg0: string): CharFloatPair;
    leftChar(): string;
    right(arg0: number): CharFloatPair;
    right(): number;
    right(arg0: number): CharFloatPair;
    right(arg0: number): CharFloatPair;
    rightFloat(): number;
    second(): number;
    second(arg0: number): CharFloatPair;
    second(arg0: number): CharFloatPair;
    secondFloat(): number;
    setValue(arg0: number): number;
    setValue(arg0: number): number;
    setValue(arg0: number): number;
    toString(): string;
    value(): number;
    value(arg0: number): CharFloatPair;
    value(arg0: number): CharFloatPair;
    valueFloat(): number;
}