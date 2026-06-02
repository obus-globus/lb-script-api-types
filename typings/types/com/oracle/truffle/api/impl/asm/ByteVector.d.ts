import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ByteVector extends Object {
    constructor()
    constructor(data: number[])
    constructor(initialCapacity: number)
    // private data: number[];
    // private length: number;
    encodeUtf8(stringValue: string, offset: number, maxByteLength: number): ByteVector;
    // private enlarge(size: number): void;
    put11(byteValue1: number, byteValue2: number): ByteVector;
    put112(byteValue1: number, byteValue2: number, shortValue: number): ByteVector;
    put12(byteValue: number, shortValue: number): ByteVector;
    put122(byteValue: number, shortValue1: number, shortValue2: number): ByteVector;
    putByte(byteValue: number): ByteVector;
    putByteArray(byteArrayValue: number[], byteOffset: number, byteLength: number): ByteVector;
    putInt(intValue: number): ByteVector;
    putLong(longValue: number): ByteVector;
    putShort(shortValue: number): ByteVector;
    putUTF8(stringValue: string): ByteVector;
    size(): number;
}