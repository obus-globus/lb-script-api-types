import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ByteBufOutputStream } from '../../../../../io/netty/buffer/ByteBufOutputStream.d.ts'
import type { OutputStream } from '../../../../../java/io/OutputStream.d.ts'
export class LittleEndianByteBufOutputStream extends ByteBufOutputStream {
    static nullOutputStream(): OutputStream;
    constructor(arg0: ByteBuf)
    // private buffer: ByteBuf;
    writeChar(arg0: number): void;
    writeDouble(arg0: number): void;
    writeFloat(arg0: number): void;
    writeInt(arg0: number): void;
    writeLong(arg0: number): void;
    writeShort(arg0: number): void;
    writeUTF(arg0: string): void;
}