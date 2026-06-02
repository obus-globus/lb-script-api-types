import type { ReadableByteChannel } from '../../../java/nio/channels/ReadableByteChannel.d.ts'
import type { WritableByteChannel } from '../../../java/nio/channels/WritableByteChannel.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface ByteChannel extends ReadableByteChannel, WritableByteChannel, Object{
}