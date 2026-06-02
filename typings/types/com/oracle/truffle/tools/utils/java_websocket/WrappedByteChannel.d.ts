import type { ByteBuffer } from '../../../../../../java/nio/ByteBuffer.d.ts'
import type { ByteChannel } from '../../../../../../java/nio/channels/ByteChannel.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface WrappedByteChannel extends ByteChannel, Object{
    isBlocking(): boolean;
    isNeedRead(): boolean;
    isNeedWrite(): boolean;
    readMore(arg0: ByteBuffer): number;
    writeMore(): void;
}