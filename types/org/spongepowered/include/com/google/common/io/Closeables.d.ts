import type { Closeable } from '../../../../../../../java/io/Closeable.d.ts'
import type { InputStream } from '../../../../../../../java/io/InputStream.d.ts'
import type { Reader } from '../../../../../../../java/io/Reader.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class Closeables extends Object {
    static close(paramarg0: Closeable, paramarg1: boolean): void;
    static closeQuietly(paramarg0: InputStream): void;
    static closeQuietly(paramarg0: Reader): void;
    private constructor()
}