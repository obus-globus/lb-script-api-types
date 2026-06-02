import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { LittleEndianByteBufInputStream } from '../../../../../net/raphimc/viabedrock/api/io/LittleEndianByteBufInputStream.d.ts'
export class NetworkByteBufInputStream extends LittleEndianByteBufInputStream {
    static nullInputStream(): InputStream;
    constructor(arg0: ByteBuf)
    // private buffer: ByteBuf;
    readInt(): number;
    readLong(): number;
    readUTF(): string;
}