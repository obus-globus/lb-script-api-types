import type { ReadableByteChannel } from '../../../../../../java/nio/channels/ReadableByteChannel.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Buffer } from '../../../../../../kotlinx/io/Buffer.d.ts'
import type { RawSource } from '../../../../../../kotlinx/io/RawSource.d.ts'
export class ReadableByteChannelSource extends Object implements RawSource {
    constructor(channel: ReadableByteChannel)
    // private channel: ReadableByteChannel;
    close(): void;
    readAtMostTo(sink: Buffer, byteCount: number): number;
    toString(): string;
}