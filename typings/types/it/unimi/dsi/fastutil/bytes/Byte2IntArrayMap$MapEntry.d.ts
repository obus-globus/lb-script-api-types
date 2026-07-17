import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Byte2IntMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2IntMap$Entry.d.ts'
import type { ByteIntPair } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteIntPair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Byte2IntArrayMap$MapEntry extends Object implements Byte2IntMap$Entry, ByteIntPair, Map$Entry<number, number> {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: number)
    // private index: number;
    getKey(): number;
    getValue(): number;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): ByteIntPair;
    firstByte(): number;
    getByteKey(): number;
    getIntValue(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): ByteIntPair;
    keyByte(): number;
    left(): number;
    left(arg0: number): ByteIntPair;
    leftByte(): number;
    right(): number;
    right(arg0: number): ByteIntPair;
    rightInt(): number;
    second(): number;
    second(arg0: number): ByteIntPair;
    secondInt(): number;
    setValue(arg0: number): number;
    toString(): string;
    value(): number;
    value(arg0: number): ByteIntPair;
    valueInt(): number;
}