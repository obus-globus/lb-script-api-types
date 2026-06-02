import type { ByteBuffer } from '../../../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class ByteBufferAccess extends Object {
    static bigEndian(): ByteBufferAccess;
    static forOrder(paramlittleEndian: boolean): ByteBufferAccess;
    static littleEndian(): ByteBufferAccess;
    static nativeOrder(): ByteBufferAccess;
    constructor()
    compareExchangeInt16(buffer: ByteBuffer, index: number, expectedValue: number, newValue: number): number;
    compareExchangeInt32(buffer: ByteBuffer, index: number, expectedValue: number, newValue: number): number;
    compareExchangeInt64(buffer: ByteBuffer, index: number, expectedValue: number, newValue: number): number;
    compareExchangeInt8(buffer: ByteBuffer, index: number, expectedValue: number, newValue: number): number;
    getDouble(buffer: ByteBuffer, index: number): number;
    getFloat(buffer: ByteBuffer, index: number): number;
    getFloat16(buffer: ByteBuffer, index: number): number;
    getInt16(buffer: ByteBuffer, index: number): number;
    getInt32(buffer: ByteBuffer, index: number): number;
    getInt64(buffer: ByteBuffer, index: number): number;
    getInt8(buffer: ByteBuffer, index: number): number;
    getUint16(buffer: ByteBuffer, index: number): number;
    getUint8(buffer: ByteBuffer, index: number): number;
    putDouble(buffer: ByteBuffer, index: number, value: number): void;
    putFloat(buffer: ByteBuffer, index: number, value: number): void;
    putFloat16(buffer: ByteBuffer, index: number, value: number): void;
    putInt16(buffer: ByteBuffer, index: number, value: number): void;
    putInt32(buffer: ByteBuffer, index: number, value: number): void;
    putInt64(buffer: ByteBuffer, index: number, value: number): void;
    putInt8(buffer: ByteBuffer, index: number, value: number): void;
}