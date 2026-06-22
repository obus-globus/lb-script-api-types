import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { ReadableByteChannel } from '../../../java/nio/channels/ReadableByteChannel.d.ts'
import type { WritableByteChannel } from '../../../java/nio/channels/WritableByteChannel.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface ByteChannel extends ReadableByteChannel, WritableByteChannel, Object{
    close(): void;
    isOpen(): boolean;
    read(arg0: ByteBuffer): number;
    write(arg0: ByteBuffer): number;
}