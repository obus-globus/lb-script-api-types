import type { ReadableByteChannel } from '../../../java/nio/channels/ReadableByteChannel.d.ts'
import type { WritableByteChannel } from '../../../java/nio/channels/WritableByteChannel.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Buffer } from '../../../kotlinx/io/Buffer.d.ts'
export class BufferViewJvmKt extends Object {
    static read(self: ReadableByteChannel, buffer: Buffer): number;
    static write(self: WritableByteChannel, buffer: Buffer): number;
}