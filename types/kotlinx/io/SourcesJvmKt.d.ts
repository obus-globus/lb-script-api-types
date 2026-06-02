import type { InputStream } from '../../java/io/InputStream.d.ts'
import type { ByteBuffer } from '../../java/nio/ByteBuffer.d.ts'
import type { ReadableByteChannel } from '../../java/nio/channels/ReadableByteChannel.d.ts'
import type { Charset } from '../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Source } from '../../kotlinx/io/Source.d.ts'
export class SourcesJvmKt extends Object {
    static asByteChannel(paramarg0: Source): ReadableByteChannel;
    static asInputStream(paramarg0: Source): InputStream;
    static readAtMostTo(paramarg0: Source, paramarg1: ByteBuffer): number;
    static readString(paramarg0: Source, paramarg1: Charset): string;
    static readString(paramarg0: Source, paramarg1: number, paramarg2: Charset): string;
}