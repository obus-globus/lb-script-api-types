import type { Double2LongMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2LongMap$Entry.d.ts'
import type { DoubleLongPair } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleLongPair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Double2LongOpenHashMap$MapEntry extends Object implements Double2LongMap$Entry, DoubleLongPair, Map$Entry<number, number> {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    // private index: number;
    getKey(): number;
    getValue(): number;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): DoubleLongPair;
    firstDouble(): number;
    getDoubleKey(): number;
    getLongValue(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): DoubleLongPair;
    keyDouble(): number;
    left(): number;
    left(arg0: number): DoubleLongPair;
    leftDouble(): number;
    right(): number;
    right(arg0: number): DoubleLongPair;
    rightLong(): number;
    second(): number;
    second(arg0: number): DoubleLongPair;
    secondLong(): number;
    setValue(arg0: number): number;
    toString(): string;
    value(): number;
    value(arg0: number): DoubleLongPair;
    valueLong(): number;
}