import type { Int2IntMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2IntMap$Entry.d.ts'
import type { IntIntPair } from '../../../../../it/unimi/dsi/fastutil/ints/IntIntPair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Int2IntOpenHashMap$MapEntry extends Object implements Int2IntMap$Entry, IntIntPair, Map$Entry<number, number> {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    // private index: number;
    getKey(): number;
    getValue(): number;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): IntIntPair;
    firstInt(): number;
    getIntKey(): number;
    getIntValue(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): IntIntPair;
    keyInt(): number;
    left(): number;
    left(arg0: number): IntIntPair;
    leftInt(): number;
    right(): number;
    right(arg0: number): IntIntPair;
    rightInt(): number;
    second(): number;
    second(arg0: number): IntIntPair;
    secondInt(): number;
    setValue(arg0: number): number;
    toString(): string;
    value(): number;
    value(arg0: number): IntIntPair;
    valueInt(): number;
}