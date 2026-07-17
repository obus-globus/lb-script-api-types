import type { Double2ShortMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ShortMap$Entry.d.ts'
import type { DoubleShortPair } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleShortPair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Double2ShortLinkedOpenHashMap$MapEntry extends Object implements Double2ShortMap$Entry, DoubleShortPair, Map$Entry<number, number> {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    // private index: number;
    getKey(): number;
    getValue(): number;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): DoubleShortPair;
    firstDouble(): number;
    getDoubleKey(): number;
    getShortValue(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): DoubleShortPair;
    keyDouble(): number;
    left(): number;
    left(arg0: number): DoubleShortPair;
    leftDouble(): number;
    right(): number;
    right(arg0: number): DoubleShortPair;
    rightShort(): number;
    second(): number;
    second(arg0: number): DoubleShortPair;
    secondShort(): number;
    setValue(arg0: number): number;
    toString(): string;
    value(): number;
    value(arg0: number): DoubleShortPair;
    valueShort(): number;
}