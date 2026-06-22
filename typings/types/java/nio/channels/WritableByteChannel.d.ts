import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Channel } from '../../../java/nio/channels/Channel.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface WritableByteChannel extends Channel, Object{
    close(): void;
    isOpen(): boolean;
    write(arg0: ByteBuffer): number;
}