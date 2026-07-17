import type { Byte2DoubleMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2DoubleMap$Entry.d.ts'
import type { ByteDoublePair } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteDoublePair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Byte2DoubleLinkedOpenHashMap$MapEntry extends Object implements Byte2DoubleMap$Entry, ByteDoublePair, Map$Entry<number, number> {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    // private index: number;
    getKey(): number;
    getValue(): number;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): ByteDoublePair;
    firstByte(): number;
    getByteKey(): number;
    getDoubleValue(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): ByteDoublePair;
    keyByte(): number;
    left(): number;
    left(arg0: number): ByteDoublePair;
    leftByte(): number;
    right(): number;
    right(arg0: number): ByteDoublePair;
    rightDouble(): number;
    second(): number;
    second(arg0: number): ByteDoublePair;
    secondDouble(): number;
    setValue(arg0: number): number;
    toString(): string;
    value(): number;
    value(arg0: number): ByteDoublePair;
    valueDouble(): number;
}