import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Byte2LongMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2LongMap$Entry.d.ts'
import type { ByteLongPair } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteLongPair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Byte2LongArrayMap$MapEntry extends Object implements Byte2LongMap$Entry, ByteLongPair, Map$Entry<number, number> {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: number)
    // private index: number;
    getKey(): number;
    getValue(): number;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): ByteLongPair;
    firstByte(): number;
    getByteKey(): number;
    getLongValue(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): ByteLongPair;
    keyByte(): number;
    left(): number;
    left(arg0: number): ByteLongPair;
    leftByte(): number;
    right(): number;
    right(arg0: number): ByteLongPair;
    rightLong(): number;
    second(): number;
    second(arg0: number): ByteLongPair;
    secondLong(): number;
    setValue(arg0: number): number;
    toString(): string;
    value(): number;
    value(arg0: number): ByteLongPair;
    valueLong(): number;
}