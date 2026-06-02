import type { InputStream } from '../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../java/io/OutputStream.d.ts'
import type { ByteBuffer } from '../../java/nio/ByteBuffer.d.ts'
import type { ByteChannel } from '../../java/nio/channels/ByteChannel.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Buffer } from '../../kotlinx/io/Buffer.d.ts'
export class BuffersJvmKt extends Object {
    static asByteChannel(paramarg0: Buffer): ByteChannel;
    static copyTo(paramarg0: Buffer, paramarg1: OutputStream, paramarg2: number, paramarg3: number): void;
    static readAtMostTo(paramarg0: Buffer, paramarg1: ByteBuffer): number;
    static readTo(paramarg0: Buffer, paramarg1: OutputStream, paramarg2: number): void;
    static transferFrom(paramarg0: Buffer, paramarg1: InputStream): Buffer;
    static transferFrom(paramarg0: Buffer, paramarg1: ByteBuffer): Buffer;
    static write(paramarg0: Buffer, paramarg1: InputStream, paramarg2: number): Buffer;
}