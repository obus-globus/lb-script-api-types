import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { OutputStream } from '../../../../../java/io/OutputStream.d.ts'
import type { LittleEndianByteBufOutputStream } from '../../../../../net/raphimc/viabedrock/api/io/LittleEndianByteBufOutputStream.d.ts'
export class NetworkByteBufOutputStream extends LittleEndianByteBufOutputStream {
    static nullOutputStream(): OutputStream;
    constructor(arg0: ByteBuf)
    // private buffer: ByteBuf;
    writeInt(arg0: number): void;
    writeLong(arg0: number): void;
    writeUTF(arg0: string): void;
}