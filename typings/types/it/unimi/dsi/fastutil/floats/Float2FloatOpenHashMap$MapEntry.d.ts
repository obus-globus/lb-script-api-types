import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Float2FloatMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2FloatMap$Entry.d.ts'
import type { FloatFloatPair } from '../../../../../it/unimi/dsi/fastutil/floats/FloatFloatPair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Float2FloatOpenHashMap$MapEntry extends Object implements Float2FloatMap$Entry, FloatFloatPair, Map$Entry<number, number> {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: number)
    // private index: number;
    getKey(): number;
    getValue(): number;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): FloatFloatPair;
    firstFloat(): number;
    getFloatKey(): number;
    getFloatValue(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): FloatFloatPair;
    keyFloat(): number;
    left(): number;
    left(arg0: number): FloatFloatPair;
    leftFloat(): number;
    right(): number;
    right(arg0: number): FloatFloatPair;
    rightFloat(): number;
    second(): number;
    second(arg0: number): FloatFloatPair;
    secondFloat(): number;
    setValue(arg0: number): number;
    toString(): string;
    value(): number;
    value(arg0: number): FloatFloatPair;
    valueFloat(): number;
}