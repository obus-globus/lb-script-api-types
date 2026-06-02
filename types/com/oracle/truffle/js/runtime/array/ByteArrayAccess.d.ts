import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class ByteArrayAccess extends Object {
    static bigEndian(): ByteArrayAccess;
    static forOrder(paramlittleEndian: boolean): ByteArrayAccess;
    static littleEndian(): ByteArrayAccess;
    static nativeOrder(): ByteArrayAccess;
    constructor()
    getDouble(buffer: number[], byteIndex: number): number;
    getFloat(buffer: number[], byteIndex: number): number;
    getFloat16(buffer: number[], byteIndex: number): number;
    getInt16(buffer: number[], byteIndex: number): number;
    getInt32(buffer: number[], byteIndex: number): number;
    getInt64(buffer: number[], byteIndex: number): number;
    getInt8(buffer: number[], byteIndex: number): number;
    getUint16(buffer: number[], byteIndex: number): number;
    getUint8(buffer: number[], byteIndex: number): number;
    putDouble(buffer: number[], byteIndex: number, value: number): void;
    putFloat(buffer: number[], byteIndex: number, value: number): void;
    putFloat16(buffer: number[], byteIndex: number, value: number): void;
    putInt16(buffer: number[], byteIndex: number, value: number): void;
    putInt32(buffer: number[], byteIndex: number, value: number): void;
    putInt64(buffer: number[], byteIndex: number, value: number): void;
    putInt8(buffer: number[], byteIndex: number, value: number): void;
}