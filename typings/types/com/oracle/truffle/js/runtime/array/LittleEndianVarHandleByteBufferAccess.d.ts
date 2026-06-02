import type { ByteBufferAccess } from '../../../../../../com/oracle/truffle/js/runtime/array/ByteBufferAccess.d.ts'
import type { ByteBuffer } from '../../../../../../java/nio/ByteBuffer.d.ts'
export class LittleEndianVarHandleByteBufferAccess extends ByteBufferAccess {
    static bigEndian(): ByteBufferAccess;
    static forOrder(paramlittleEndian: boolean): ByteBufferAccess;
    static littleEndian(): ByteBufferAccess;
    static nativeOrder(): ByteBufferAccess;
    private constructor()
    compareExchangeInt32(buffer: ByteBuffer, index: number, expectedValue: number, newValue: number): number;
    compareExchangeInt64(buffer: ByteBuffer, index: number, expectedValue: number, newValue: number): number;
    getDouble(buffer: ByteBuffer, index: number): number;
    getFloat(buffer: ByteBuffer, index: number): number;
    getInt16(buffer: ByteBuffer, index: number): number;
    getInt32(buffer: ByteBuffer, index: number): number;
    getInt64(buffer: ByteBuffer, index: number): number;
    putDouble(buffer: ByteBuffer, index: number, value: number): void;
    putFloat(buffer: ByteBuffer, index: number, value: number): void;
    putInt16(buffer: ByteBuffer, index: number, value: number): void;
    putInt32(buffer: ByteBuffer, index: number, value: number): void;
    putInt64(buffer: ByteBuffer, index: number, value: number): void;
}