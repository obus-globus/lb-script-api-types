import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { WritableByteChannel } from '../../../java/nio/channels/WritableByteChannel.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface GatheringByteChannel extends WritableByteChannel, Object{
    write(arg0: ByteBuffer[]): number;
    write(arg0: ByteBuffer[], arg1: number, arg2: number): number;
}