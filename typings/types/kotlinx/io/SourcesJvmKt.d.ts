import type { InputStream } from '../../java/io/InputStream.d.ts'
import type { ByteBuffer } from '../../java/nio/ByteBuffer.d.ts'
import type { ReadableByteChannel } from '../../java/nio/channels/ReadableByteChannel.d.ts'
import type { Charset } from '../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Source } from '../../kotlinx/io/Source.d.ts'
export class SourcesJvmKt extends Object {
    static asByteChannel(self: Source): ReadableByteChannel;
    static asInputStream(self: Source): InputStream;
    static readAtMostTo(self: Source, sink: ByteBuffer): number;
    static readString(self: Source, charset: Charset): string;
    static readString(self: Source, byteCount: number, charset: Charset): string;
}