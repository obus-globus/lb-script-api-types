import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
import type { ByteOrder } from '../../../../java/nio/ByteOrder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ByteBuffer extends Object {
    constructor(arg0: InputStream)
    constructor(arg0: InputStream, arg1: OutputStream)
    constructor(arg0: OutputStream)
    // private in: InputStream;
    // private out: OutputStream;
    read(): number;
    readASCII(arg0: ByteOrder): string;
    // private readBoolean(): boolean;
    readByte(): number;
    readChar(arg0: ByteOrder): string;
    readDouble(arg0: ByteOrder): number;
    readFloat(arg0: ByteOrder): number;
    readInt(arg0: ByteOrder): number;
    readLong(arg0: ByteOrder): number;
    readShort(arg0: ByteOrder): number;
    readUnsignedByte(): number;
    readUnsignedShort(arg0: ByteOrder): number;
    write(arg0: number): ByteBuffer;
    writeASCII(arg0: string, arg1: ByteOrder): ByteBuffer;
    writeBoolean(arg0: boolean): ByteBuffer;
    writeByte(arg0: number): ByteBuffer;
    writeChar(arg0: string, arg1: ByteOrder): ByteBuffer;
    writeDouble(arg0: number, arg1: ByteOrder): ByteBuffer;
    writeFloat(arg0: number, arg1: ByteOrder): ByteBuffer;
    writeInt(arg0: number, arg1: ByteOrder): ByteBuffer;
    writeLong(arg0: number, arg1: ByteOrder): ByteBuffer;
    writeShort(arg0: number, arg1: ByteOrder): ByteBuffer;
}