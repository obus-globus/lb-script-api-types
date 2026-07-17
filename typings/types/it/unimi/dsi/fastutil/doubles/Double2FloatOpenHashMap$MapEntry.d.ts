import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Double2FloatMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2FloatMap$Entry.d.ts'
import type { DoubleFloatPair } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleFloatPair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Double2FloatOpenHashMap$MapEntry extends Object implements Double2FloatMap$Entry, DoubleFloatPair, Map$Entry<number, number> {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: number)
    // private index: number;
    getKey(): number;
    getValue(): number;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): DoubleFloatPair;
    firstDouble(): number;
    getDoubleKey(): number;
    getFloatValue(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): DoubleFloatPair;
    keyDouble(): number;
    left(): number;
    left(arg0: number): DoubleFloatPair;
    leftDouble(): number;
    right(): number;
    right(arg0: number): DoubleFloatPair;
    rightFloat(): number;
    second(): number;
    second(arg0: number): DoubleFloatPair;
    secondFloat(): number;
    setValue(arg0: number): number;
    toString(): string;
    value(): number;
    value(arg0: number): DoubleFloatPair;
    valueFloat(): number;
}