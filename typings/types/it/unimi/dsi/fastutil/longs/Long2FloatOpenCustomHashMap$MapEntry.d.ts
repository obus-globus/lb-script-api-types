import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Long2FloatMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2FloatMap$Entry.d.ts'
import type { LongFloatPair } from '../../../../../it/unimi/dsi/fastutil/longs/LongFloatPair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Long2FloatOpenCustomHashMap$MapEntry extends Object implements Long2FloatMap$Entry, LongFloatPair, Map$Entry<number, number> {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: number)
    // private index: number;
    getKey(): number;
    getValue(): number;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): LongFloatPair;
    firstLong(): number;
    getFloatValue(): number;
    getLongKey(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): LongFloatPair;
    keyLong(): number;
    left(): number;
    left(arg0: number): LongFloatPair;
    leftLong(): number;
    right(): number;
    right(arg0: number): LongFloatPair;
    rightFloat(): number;
    second(): number;
    second(arg0: number): LongFloatPair;
    secondFloat(): number;
    setValue(arg0: number): number;
    toString(): string;
    value(): number;
    value(arg0: number): LongFloatPair;
    valueFloat(): number;
}