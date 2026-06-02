import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Channel } from '../../../../io/netty/channel/Channel.d.ts'
import type { FileRegion } from '../../../../io/netty/channel/FileRegion.d.ts'
import type { AbstractOioByteChannel } from '../../../../io/netty/channel/oio/AbstractOioByteChannel.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
import type { WritableByteChannel } from '../../../../java/nio/channels/WritableByteChannel.d.ts'
export abstract class OioByteStreamChannel extends AbstractOioByteChannel {
    constructor(arg0: Channel)
    // private is: InputStream;
    // private os: OutputStream;
    // private outChannel: WritableByteChannel;
    activate(arg0: InputStream, arg1: OutputStream): void;
    available(): number;
    doClose(): void;
    doReadBytes(arg0: ByteBuf): number;
    doWriteBytes(arg0: ByteBuf): void;
    doWriteFileRegion(arg0: FileRegion): void;
    isActive(): boolean;
}