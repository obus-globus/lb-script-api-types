import type { BufferedInputStream } from '../../java/io/BufferedInputStream.d.ts'
import type { InputStream } from '../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../java/io/OutputStream.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { ByteIterator } from '../../kotlin/collections/ByteIterator.d.ts'
export class ByteStreamsKt extends Object {
    static copyTo(paramarg0: InputStream, paramarg1: OutputStream, paramarg2: number): number;
    static iterator(paramarg0: BufferedInputStream): ByteIterator;
    static readBytes(paramarg0: InputStream): number[];
    static readBytes(paramarg0: InputStream, paramarg1: number): number[];
}