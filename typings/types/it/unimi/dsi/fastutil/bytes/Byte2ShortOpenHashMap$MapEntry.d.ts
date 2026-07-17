import type { Byte2ShortMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ShortMap$Entry.d.ts'
import type { ByteShortPair } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteShortPair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Byte2ShortOpenHashMap$MapEntry extends Object implements Byte2ShortMap$Entry, ByteShortPair, Map$Entry<number, number> {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    // private index: number;
    getKey(): number;
    getValue(): number;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): ByteShortPair;
    firstByte(): number;
    getByteKey(): number;
    getShortValue(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): ByteShortPair;
    keyByte(): number;
    left(): number;
    left(arg0: number): ByteShortPair;
    leftByte(): number;
    right(): number;
    right(arg0: number): ByteShortPair;
    rightShort(): number;
    second(): number;
    second(arg0: number): ByteShortPair;
    secondShort(): number;
    setValue(arg0: number): number;
    toString(): string;
    value(): number;
    value(arg0: number): ByteShortPair;
    valueShort(): number;
}