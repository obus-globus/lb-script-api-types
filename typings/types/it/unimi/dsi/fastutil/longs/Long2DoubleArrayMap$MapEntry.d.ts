import type { Long2DoubleMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2DoubleMap$Entry.d.ts'
import type { LongDoublePair } from '../../../../../it/unimi/dsi/fastutil/longs/LongDoublePair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Long2DoubleArrayMap$MapEntry extends Object implements Long2DoubleMap$Entry, LongDoublePair, Map$Entry<number, number> {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    // private index: number;
    getKey(): number;
    getValue(): number;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): LongDoublePair;
    firstLong(): number;
    getDoubleValue(): number;
    getLongKey(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): LongDoublePair;
    keyLong(): number;
    left(): number;
    left(arg0: number): LongDoublePair;
    leftLong(): number;
    right(): number;
    right(arg0: number): LongDoublePair;
    rightDouble(): number;
    second(): number;
    second(arg0: number): LongDoublePair;
    secondDouble(): number;
    setValue(arg0: number): number;
    toString(): string;
    value(): number;
    value(arg0: number): LongDoublePair;
    valueDouble(): number;
}