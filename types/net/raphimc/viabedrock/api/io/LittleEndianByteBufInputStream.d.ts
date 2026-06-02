import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ByteBufInputStream } from '../../../../../io/netty/buffer/ByteBufInputStream.d.ts'
import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
export class LittleEndianByteBufInputStream extends ByteBufInputStream {
    static nullInputStream(): InputStream;
    constructor(arg0: ByteBuf)
    // private buffer: ByteBuf;
    readChar(): string;
    readDouble(): number;
    readFloat(): number;
    readInt(): number;
    readLong(): number;
    readShort(): number;
    readUTF(): string;
    readUnsignedShort(): number;
}