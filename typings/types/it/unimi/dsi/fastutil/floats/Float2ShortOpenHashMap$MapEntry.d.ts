import type { Float2ShortMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ShortMap$Entry.d.ts'
import type { FloatShortPair } from '../../../../../it/unimi/dsi/fastutil/floats/FloatShortPair.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Float2ShortOpenHashMap$MapEntry extends Object implements Float2ShortMap$Entry, FloatShortPair, Map$Entry<number, number> {
    static comparingByKey(): (param0: Map$Entry<Object, Object>, param1: Map$Entry<Object, Object>) => number;
    static comparingByKey(paramarg0: (param0: Object, param1: Object) => number): (param0: Map$Entry<Object, Object>, param1: Map$Entry<Object, Object>) => number;
    static comparingByValue(): (param0: Map$Entry<Object, Object>, param1: Map$Entry<Object, Object>) => number;
    static comparingByValue(paramarg0: (param0: Object, param1: Object) => number): (param0: Map$Entry<Object, Object>, param1: Map$Entry<Object, Object>) => number;
    static copyOf(paramarg0: Map$Entry<Object, Object>): Map$Entry<Object, Object>;
    static lexComparator(): (param0: FloatShortPair, param1: FloatShortPair) => number;
    static of(paramarg0: number, paramarg1: number): FloatShortPair;
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    // private index: number;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): FloatShortPair;
    firstFloat(): number;
    getFloatKey(): number;
    getShortValue(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): FloatShortPair;
    keyFloat(): number;
    left(): number;
    left(arg0: number): FloatShortPair;
    leftFloat(): number;
    right(): number;
    right(arg0: number): FloatShortPair;
    rightShort(): number;
    second(): number;
    second(arg0: number): FloatShortPair;
    secondShort(): number;
    setValue(arg0: number): number;
    toString(): string;
    value(): number;
    value(arg0: number): FloatShortPair;
    valueShort(): number;
}