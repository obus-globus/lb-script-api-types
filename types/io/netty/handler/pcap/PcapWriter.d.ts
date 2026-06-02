import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { PcapWriteHandler } from '../../../../io/netty/handler/pcap/PcapWriteHandler.d.ts'
import type { Closeable } from '../../../../java/io/Closeable.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class PcapWriter extends Object implements Closeable {
    constructor(arg0: PcapWriteHandler)
    // private outputStream: OutputStream;
    // private pcapWriteHandler: PcapWriteHandler;
    close(): void;
    toString(): string;
    writePacket(arg0: ByteBuf, arg1: ByteBuf): void;
}