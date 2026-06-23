import type { File } from '../../../../../java/io/File.d.ts'
import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../../../java/io/OutputStream.d.ts'
import type { RandomAccessFile } from '../../../../../java/io/RandomAccessFile.d.ts'
import type { Reader } from '../../../../../java/io/Reader.d.ts'
import type { Writer } from '../../../../../java/io/Writer.d.ts'
import type { Charset } from '../../../../../java/nio/charset/Charset.d.ts'
import type { OpenOption } from '../../../../../java/nio/file/OpenOption.d.ts'
import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
import type { AbstractSupplier } from '../../../../../org/apache/commons/io/build/AbstractSupplier.d.ts'
export abstract class AbstractOrigin<T extends Object | number | string | boolean, B extends AbstractOrigin<T, B>> extends AbstractSupplier<T, B> {
    constructor(arg0: T)
    // private origin: T;
    get(): T;
    getByteArray(): number[];
    getByteArray(arg0: number, arg1: number): number[];
    getCharSequence(arg0: Charset): CharSequence;
    getFile(): File;
    getInputStream(arg0: OpenOption[]): InputStream;
    getOutputStream(arg0: OpenOption[]): OutputStream;
    getPath(): Path[];
    getRandomAccessFile(arg0: OpenOption[]): RandomAccessFile;
    getReader(arg0: Charset): Reader;
    // private getSimpleClassName(): string;
    getWriter(arg0: Charset, arg1: OpenOption[]): Writer;
    size(): number;
    toString(): string;
}