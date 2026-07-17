import type { Byte2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2CharMap$Entry.d.ts'
import type { ByteCharPair } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteCharPair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Byte2CharArrayMap$MapEntry extends Object implements Byte2CharMap$Entry, ByteCharPair, Map$Entry<number, string> {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    // private index: number;
    getKey(): number;
    getValue(): string;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): ByteCharPair;
    firstByte(): number;
    getByteKey(): number;
    getCharValue(): string;
    hashCode(): number;
    key(): number;
    key(arg0: number): ByteCharPair;
    keyByte(): number;
    left(): number;
    left(arg0: number): ByteCharPair;
    leftByte(): number;
    right(): string;
    right(arg0: string): ByteCharPair;
    rightChar(): string;
    second(): string;
    second(arg0: string): ByteCharPair;
    secondChar(): string;
    setValue(arg0: string): string;
    toString(): string;
    value(): string;
    value(arg0: string): ByteCharPair;
    valueChar(): string;
}