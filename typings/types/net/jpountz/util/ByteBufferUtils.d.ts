import type { Class } from '../../../java/lang/Class.d.ts'
import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class ByteBufferUtils extends Enum<ByteBufferUtils> {
    static checkNotReadOnly(paramarg0: ByteBuffer): void;
    static checkRange(paramarg0: ByteBuffer, paramarg1: number): void;
    static checkRange(paramarg0: ByteBuffer, paramarg1: number, paramarg2: number): void;
    static inLittleEndianOrder(paramarg0: ByteBuffer): ByteBuffer;
    static inNativeByteOrder(paramarg0: ByteBuffer): ByteBuffer;
    static readByte(paramarg0: ByteBuffer, paramarg1: number): number;
    static readInt(paramarg0: ByteBuffer, paramarg1: number): number;
    static readIntLE(paramarg0: ByteBuffer, paramarg1: number): number;
    static readLong(paramarg0: ByteBuffer, paramarg1: number): number;
    static readLongLE(paramarg0: ByteBuffer, paramarg1: number): number;
    static readShortLE(paramarg0: ByteBuffer, paramarg1: number): number;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ByteBufferUtils;
    static values(): ByteBufferUtils[];
    static writeByte(paramarg0: ByteBuffer, paramarg1: number, paramarg2: number): void;
    static writeInt(paramarg0: ByteBuffer, paramarg1: number, paramarg2: number): void;
    static writeLong(paramarg0: ByteBuffer, paramarg1: number, paramarg2: number): void;
    static writeShortLE(paramarg0: ByteBuffer, paramarg1: number, paramarg2: number): void;
    private constructor()
}