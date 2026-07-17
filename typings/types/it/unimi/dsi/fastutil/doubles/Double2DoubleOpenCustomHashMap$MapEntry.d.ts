import type { Double2DoubleMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2DoubleMap$Entry.d.ts'
import type { DoubleDoublePair } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleDoublePair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Double2DoubleOpenCustomHashMap$MapEntry extends Object implements Double2DoubleMap$Entry, DoubleDoublePair, Map$Entry<number, number> {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    // private index: number;
    getKey(): number;
    getValue(): number;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): DoubleDoublePair;
    firstDouble(): number;
    getDoubleKey(): number;
    getDoubleValue(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): DoubleDoublePair;
    keyDouble(): number;
    left(): number;
    left(arg0: number): DoubleDoublePair;
    leftDouble(): number;
    right(): number;
    right(arg0: number): DoubleDoublePair;
    rightDouble(): number;
    second(): number;
    second(arg0: number): DoubleDoublePair;
    secondDouble(): number;
    setValue(arg0: number): number;
    toString(): string;
    value(): number;
    value(arg0: number): DoubleDoublePair;
    valueDouble(): number;
}