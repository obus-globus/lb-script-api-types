import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Int2ShortMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ShortMap$Entry.d.ts'
import type { IntShortPair } from '../../../../../it/unimi/dsi/fastutil/ints/IntShortPair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Int2ShortLinkedOpenHashMap$MapEntry extends Object implements Int2ShortMap$Entry, IntShortPair, Map$Entry<number, number> {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: number)
    // private index: number;
    getKey(): number;
    getValue(): number;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): IntShortPair;
    firstInt(): number;
    getIntKey(): number;
    getShortValue(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): IntShortPair;
    keyInt(): number;
    left(): number;
    left(arg0: number): IntShortPair;
    leftInt(): number;
    right(): number;
    right(arg0: number): IntShortPair;
    rightShort(): number;
    second(): number;
    second(arg0: number): IntShortPair;
    secondShort(): number;
    setValue(arg0: number): number;
    toString(): string;
    value(): number;
    value(arg0: number): IntShortPair;
    valueShort(): number;
}