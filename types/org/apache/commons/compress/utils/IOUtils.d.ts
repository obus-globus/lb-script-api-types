import type { Closeable } from '../../../../../java/io/Closeable.d.ts'
import type { File } from '../../../../../java/io/File.d.ts'
import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../../../java/io/OutputStream.d.ts'
import type { ByteBuffer } from '../../../../../java/nio/ByteBuffer.d.ts'
import type { ReadableByteChannel } from '../../../../../java/nio/channels/ReadableByteChannel.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class IOUtils extends Object {
    static EMPTY_LINK_OPTIONS: (Object | null)[];
    static closeQuietly(paramarg0: Closeable): void;
    static copy(paramarg0: InputStream, paramarg1: OutputStream): number;
    static copy(paramarg0: InputStream, paramarg1: OutputStream, paramarg2: number): number;
    static copy(paramarg0: File, paramarg1: OutputStream): void;
    static copyRange(paramarg0: InputStream, paramarg1: number, paramarg2: OutputStream): number;
    static copyRange(paramarg0: InputStream, paramarg1: number, paramarg2: OutputStream, paramarg3: number): number;
    static read(paramarg0: File, paramarg1: number[]): number;
    static readFully(paramarg0: InputStream, paramarg1: number[]): number;
    static readFully(paramarg0: InputStream, paramarg1: number[], paramarg2: number, paramarg3: number): number;
    static readFully(paramarg0: ReadableByteChannel, paramarg1: ByteBuffer): void;
    static readRange(paramarg0: InputStream, paramarg1: number): number[];
    static readRange(paramarg0: ReadableByteChannel, paramarg1: number): number[];
    static skip(paramarg0: InputStream, paramarg1: number): number;
    static toByteArray(paramarg0: InputStream): number[];
    private constructor()
}