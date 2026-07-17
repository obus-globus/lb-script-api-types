import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Double2IntMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2IntMap$Entry.d.ts'
import type { DoubleIntPair } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleIntPair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Double2IntOpenHashMap$MapEntry extends Object implements Double2IntMap$Entry, DoubleIntPair, Map$Entry<number, number> {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: number)
    // private index: number;
    getKey(): number;
    getValue(): number;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): DoubleIntPair;
    firstDouble(): number;
    getDoubleKey(): number;
    getIntValue(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): DoubleIntPair;
    keyDouble(): number;
    left(): number;
    left(arg0: number): DoubleIntPair;
    leftDouble(): number;
    right(): number;
    right(arg0: number): DoubleIntPair;
    rightInt(): number;
    second(): number;
    second(arg0: number): DoubleIntPair;
    secondInt(): number;
    setValue(arg0: number): number;
    toString(): string;
    value(): number;
    value(arg0: number): DoubleIntPair;
    valueInt(): number;
}