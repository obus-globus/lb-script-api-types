import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { BigInteger } from '../../../../../java/math/BigInteger.d.ts'
import type { ByteBuffer } from '../../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class BinaryDecoder extends Object {
    constructor(buffer: ByteBuffer)
    constructor(buffer: ByteBuffer, position: number)
    readonly buffer: ByteBuffer;
    // private pos: number;
    getBigInteger(): BigInteger;
    getBuffer(): ByteBuffer;
    getByteArray(): number[];
    getDouble(): number;
    getInt(): number;
    getInt32(): number;
    getInt64(): number;
    getLong(): number;
    // private getSV(): number;
    getString(): TruffleString;
    // private getU1(): number;
    getUInt(): number;
    // private getUV(): number;
    hasRemaining(): boolean;
}