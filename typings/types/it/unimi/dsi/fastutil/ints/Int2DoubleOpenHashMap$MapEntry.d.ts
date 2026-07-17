import type { Int2DoubleMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2DoubleMap$Entry.d.ts'
import type { IntDoublePair } from '../../../../../it/unimi/dsi/fastutil/ints/IntDoublePair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Int2DoubleOpenHashMap$MapEntry extends Object implements Int2DoubleMap$Entry, IntDoublePair, Map$Entry<number, number> {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    // private index: number;
    getKey(): number;
    getValue(): number;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): IntDoublePair;
    firstInt(): number;
    getDoubleValue(): number;
    getIntKey(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): IntDoublePair;
    keyInt(): number;
    left(): number;
    left(arg0: number): IntDoublePair;
    leftInt(): number;
    right(): number;
    right(arg0: number): IntDoublePair;
    rightDouble(): number;
    second(): number;
    second(arg0: number): IntDoublePair;
    secondDouble(): number;
    setValue(arg0: number): number;
    toString(): string;
    value(): number;
    value(arg0: number): IntDoublePair;
    valueDouble(): number;
}