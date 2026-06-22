import type { ByteBuffer } from '../../../../../../java/nio/ByteBuffer.d.ts'
import type { ByteChannel } from '../../../../../../java/nio/channels/ByteChannel.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface WrappedByteChannel extends ByteChannel, Object{
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