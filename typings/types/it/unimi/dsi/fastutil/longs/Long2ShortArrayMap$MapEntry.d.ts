import type { Long2ShortMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ShortMap$Entry.d.ts'
import type { LongShortPair } from '../../../../../it/unimi/dsi/fastutil/longs/LongShortPair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Long2ShortArrayMap$MapEntry extends Object implements Long2ShortMap$Entry, LongShortPair, Map$Entry<number, number> {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    // private index: number;
    getKey(): number;
    getValue(): number;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): LongShortPair;
    firstLong(): number;
    getLongKey(): number;
    getShortValue(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): LongShortPair;
    keyLong(): number;
    left(): number;
    left(arg0: number): LongShortPair;
    leftLong(): number;
    right(): number;
    right(arg0: number): LongShortPair;
    rightShort(): number;
    second(): number;
    second(arg0: number): LongShortPair;
    secondShort(): number;
    setValue(arg0: number): number;
    toString(): string;
    value(): number;
    value(arg0: number): LongShortPair;
    valueShort(): number;
}