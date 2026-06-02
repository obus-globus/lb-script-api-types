import type { WrappedByteChannel } from '../../../../../../com/oracle/truffle/tools/utils/java_websocket/WrappedByteChannel.d.ts'
import type { ByteBuffer } from '../../../../../../java/nio/ByteBuffer.d.ts'
import type { ByteChannel } from '../../../../../../java/nio/channels/ByteChannel.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class AbstractWrappedByteChannel extends Object implements WrappedByteChannel {
    constructor(arg0: WrappedByteChannel)
    constructor(arg0: ByteChannel)
    // private channel: ByteChannel;
    close(): void;
    isBlocking(): boolean;
    isNeedRead(): boolean;
    isNeedWrite(): boolean;
    isOpen(): boolean;
    read(arg0: ByteBuffer): number;
    readMore(arg0: ByteBuffer): number;
    write(arg0: ByteBuffer): number;
    writeMore(): void;
}