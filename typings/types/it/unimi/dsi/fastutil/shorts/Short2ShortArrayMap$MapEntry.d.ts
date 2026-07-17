import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Short2ShortMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ShortMap$Entry.d.ts'
import type { ShortShortPair } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortShortPair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Short2ShortArrayMap$MapEntry extends Object implements Short2ShortMap$Entry, ShortShortPair, Map$Entry<number, number> {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: number)
    // private index: number;
    getKey(): number;
    getValue(): number;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): ShortShortPair;
    firstShort(): number;
    getShortKey(): number;
    getShortValue(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): ShortShortPair;
    keyShort(): number;
    left(): number;
    left(arg0: number): ShortShortPair;
    leftShort(): number;
    right(): number;
    right(arg0: number): ShortShortPair;
    rightShort(): number;
    second(): number;
    second(arg0: number): ShortShortPair;
    secondShort(): number;
    setValue(arg0: number): number;
    toString(): string;
    value(): number;
    value(arg0: number): ShortShortPair;
    valueShort(): number;
}