import type { Object } from '../../../java/lang/Object.d.ts'
export class ByteVector extends Object {
    constructor()
    constructor(arg0: number[])
    constructor(arg0: number)
    // private data: number[];
    // private length: number;
    encodeUtf8(arg0: string, arg1: number, arg2: number): ByteVector;
    // private enlarge(arg0: number): void;
    put11(arg0: number, arg1: number): ByteVector;
    put112(arg0: number, arg1: number, arg2: number): ByteVector;
    put12(arg0: number, arg1: number): ByteVector;
    put122(arg0: number, arg1: number, arg2: number): ByteVector;
    putByte(arg0: number): ByteVector;
    putByteArray(arg0: number[], arg1: number, arg2: number): ByteVector;
    putInt(arg0: number): ByteVector;
    putLong(arg0: number): ByteVector;
    putShort(arg0: number): ByteVector;
    putUTF8(arg0: string): ByteVector;
    size(): number;
}