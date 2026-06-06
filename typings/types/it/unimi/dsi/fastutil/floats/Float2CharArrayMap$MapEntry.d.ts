import type { Float2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2CharMap$Entry.d.ts'
import type { FloatCharPair } from '../../../../../it/unimi/dsi/fastutil/floats/FloatCharPair.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Float2CharArrayMap$MapEntry extends Object implements Float2CharMap$Entry, FloatCharPair, Map$Entry<number, string> {
    static comparingByKey(): (param0: Object | null) => kotlin.Boolean;
    static comparingByKey(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static comparingByValue(): (param0: Object | null) => kotlin.Boolean;
    static comparingByValue(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static copyOf(paramarg0: Map$Entry<Object, Object>): Map$Entry<Object, Object>;
    static lexComparator(): (param0: FloatCharPair) => kotlin.Boolean;
    static of(paramarg0: number, paramarg1: string): FloatCharPair;
    constructor(null_: Float2CharArrayMap$MapEntry)
    constructor(null_: Float2CharArrayMap$MapEntry, arg1: number)
    // private index: number;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): FloatCharPair;
    firstFloat(): number;
    getCharValue(): string;
    getFloatKey(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): FloatCharPair;
    keyFloat(): number;
    left(): number;
    left(arg0: number): FloatCharPair;
    leftFloat(): number;
    right(): string;
    right(arg0: string): FloatCharPair;
    rightChar(): string;
    second(): string;
    second(arg0: string): FloatCharPair;
    secondChar(): string;
    setValue(arg0: string): string;
    toString(): string;
    value(): string;
    value(arg0: string): FloatCharPair;
    valueChar(): string;
}