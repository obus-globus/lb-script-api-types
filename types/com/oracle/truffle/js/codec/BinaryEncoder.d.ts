import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { BigInteger } from '../../../../../java/math/BigInteger.d.ts'
import type { ByteBuffer } from '../../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class BinaryEncoder extends Object {
    constructor()
    readonly buffer: ByteBuffer;
    // private ensureCapacity(increase: number): void;
    getBuffer(): ByteBuffer;
    getPosition(): number;
    putBigInteger(value: BigInteger): void;
    putByteArray(value: number[]): void;
    putDouble(value: number): void;
    putInt(value: number): void;
    putInt32(value: number): void;
    putInt64(value: number): void;
    putLong(value: number): void;
    // private putSV(value: number): void;
    putString(value: TruffleString): void;
    putU1(value: number): void;
    putUInt(value: number): void;
    // private putUV(value: number): void;
}