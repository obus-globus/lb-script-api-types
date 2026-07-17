import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Float2DoubleMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2DoubleMap$Entry.d.ts'
import type { FloatDoublePair } from '../../../../../it/unimi/dsi/fastutil/floats/FloatDoublePair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Float2DoubleArrayMap$MapEntry extends Object implements Float2DoubleMap$Entry, FloatDoublePair, Map$Entry<number, number> {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: number)
    // private index: number;
    getKey(): number;
    getValue(): number;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): FloatDoublePair;
    firstFloat(): number;
    getDoubleValue(): number;
    getFloatKey(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): FloatDoublePair;
    keyFloat(): number;
    left(): number;
    left(arg0: number): FloatDoublePair;
    leftFloat(): number;
    right(): number;
    right(arg0: number): FloatDoublePair;
    rightDouble(): number;
    second(): number;
    second(arg0: number): FloatDoublePair;
    secondDouble(): number;
    setValue(arg0: number): number;
    toString(): string;
    value(): number;
    value(arg0: number): FloatDoublePair;
    valueDouble(): number;
}