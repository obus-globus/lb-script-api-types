import type { Closeable } from '../../../../java/io/Closeable.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { Reader } from '../../../../java/io/Reader.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Closeables extends Object {
    static close(paramcloseable: Closeable, paramswallowIOException: boolean): void;
    static closeQuietly(paraminputStream: InputStream): void;
    static closeQuietly(paramreader: Reader): void;
    private constructor()
}