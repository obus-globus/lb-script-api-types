import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Long2LongMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2LongMap$Entry.d.ts'
import type { LongLongPair } from '../../../../../it/unimi/dsi/fastutil/longs/LongLongPair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Long2LongOpenCustomHashMap$MapEntry extends Object implements Long2LongMap$Entry, LongLongPair, Map$Entry<number, number> {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: number)
    // private index: number;
    getKey(): number;
    getValue(): number;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): LongLongPair;
    firstLong(): number;
    getLongKey(): number;
    getLongValue(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): LongLongPair;
    keyLong(): number;
    left(): number;
    left(arg0: number): LongLongPair;
    leftLong(): number;
    right(): number;
    right(arg0: number): LongLongPair;
    rightLong(): number;
    second(): number;
    second(arg0: number): LongLongPair;
    secondLong(): number;
    setValue(arg0: number): number;
    toString(): string;
    value(): number;
    value(arg0: number): LongLongPair;
    valueLong(): number;
}