import type { File } from '../../../../../java/io/File.d.ts'
import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../../../java/io/OutputStream.d.ts'
import type { RandomAccessFile } from '../../../../../java/io/RandomAccessFile.d.ts'
import type { Reader } from '../../../../../java/io/Reader.d.ts'
import type { Writer } from '../../../../../java/io/Writer.d.ts'
import type { URI } from '../../../../../java/net/URI.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
import type { IORandomAccessFile } from '../../../../../org/apache/commons/io/IORandomAccessFile.d.ts'
import type { AbstractOrigin } from '../../../../../org/apache/commons/io/build/AbstractOrigin.d.ts'
import type { AbstractSupplier } from '../../../../../org/apache/commons/io/build/AbstractSupplier.d.ts'
export abstract class AbstractOriginSupplier<T extends Object | number | string | boolean, B extends AbstractOriginSupplier<T, B>> extends AbstractSupplier<T, B> {
    constructor()
    // private origin: AbstractOrigin<Object, Object>;
    checkOrigin(): AbstractOrigin<Object, Object>;
    getOrigin(): AbstractOrigin<Object, Object>;
    hasOrigin(): boolean;
    setByteArray(arg0: number[]): B;
    setCharSequence(arg0: CharSequence): B;
    setFile(arg0: File): B;
    setFile(arg0: string): B;
    setInputStream(arg0: InputStream): B;
    setOrigin(arg0: AbstractOrigin<Object, Object>): B;
    setOutputStream(arg0: OutputStream): B;
    setPath(arg0: Path[]): B;
    setPath(arg0: string): B;
    setRandomAccessFile(arg0: RandomAccessFile): B;
    setRandomAccessFile(arg0: IORandomAccessFile): B;
    setReader(arg0: Reader): B;
    setURI(arg0: URI): B;
    setWriter(arg0: Writer): B;
}