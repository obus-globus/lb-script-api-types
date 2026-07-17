import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Int2FloatMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2FloatMap$Entry.d.ts'
import type { IntFloatPair } from '../../../../../it/unimi/dsi/fastutil/ints/IntFloatPair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Int2FloatArrayMap$MapEntry extends Object implements Int2FloatMap$Entry, IntFloatPair, Map$Entry<number, number> {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: number)
    // private index: number;
    getKey(): number;
    getValue(): number;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): IntFloatPair;
    firstInt(): number;
    getFloatValue(): number;
    getIntKey(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): IntFloatPair;
    keyInt(): number;
    left(): number;
    left(arg0: number): IntFloatPair;
    leftInt(): number;
    right(): number;
    right(arg0: number): IntFloatPair;
    rightFloat(): number;
    second(): number;
    second(arg0: number): IntFloatPair;
    secondFloat(): number;
    setValue(arg0: number): number;
    toString(): string;
    value(): number;
    value(arg0: number): IntFloatPair;
    valueFloat(): number;
}