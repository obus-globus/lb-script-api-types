import type { BufferedInputStream } from '../../java/io/BufferedInputStream.d.ts'
import type { InputStream } from '../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../java/io/OutputStream.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { ByteIterator } from '../../kotlin/collections/ByteIterator.d.ts'
export class ByteStreamsKt extends Object {
    static copyTo(self: InputStream, out: OutputStream, bufferSize: number): number;
    static iterator(self: BufferedInputStream): ByteIterator;
    static readBytes(self: InputStream): number[];
    static readBytes(self: InputStream, estimatedSize: number): number[];
}