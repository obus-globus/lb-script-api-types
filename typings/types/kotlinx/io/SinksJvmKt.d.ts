import type { OutputStream } from '../../java/io/OutputStream.d.ts'
import type { ByteBuffer } from '../../java/nio/ByteBuffer.d.ts'
import type { WritableByteChannel } from '../../java/nio/channels/WritableByteChannel.d.ts'
import type { Charset } from '../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Sink } from '../../kotlinx/io/Sink.d.ts'
export class SinksJvmKt extends Object {
    static asByteChannel(paramarg0: Sink): WritableByteChannel;
    static asOutputStream(paramarg0: Sink): OutputStream;
    static write(paramarg0: Sink, paramarg1: ByteBuffer): number;
    static writeString(paramarg0: Sink, paramarg1: string, paramarg2: Charset, paramarg3: number, paramarg4: number): void;
}