import type { File } from '../../../../../java/io/File.d.ts'
import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../../../java/io/OutputStream.d.ts'
import type { RandomAccessFile } from '../../../../../java/io/RandomAccessFile.d.ts'
import type { Reader } from '../../../../../java/io/Reader.d.ts'
import type { Writer } from '../../../../../java/io/Writer.d.ts'
import type { Charset } from '../../../../../java/nio/charset/Charset.d.ts'
import type { OpenOption } from '../../../../../java/nio/file/OpenOption.d.ts'
import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { IntUnaryOperator } from '../../../../../java/util/function/IntUnaryOperator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
import type { AbstractOriginSupplier } from '../../../../../org/apache/commons/io/build/AbstractOriginSupplier.d.ts'
export abstract class AbstractStreamBuilder<T extends unknown, B extends AbstractStreamBuilder<T, B>> extends AbstractOriginSupplier<T, B> {
    constructor()
    readonly bufferSize: number;
    // private bufferSizeChecker: (param0: number) => number;
    readonly bufferSizeDefault: number;
    // private bufferSizeMax: number;
    readonly charset: Charset;
    readonly charsetDefault: Charset;
    // private defaultSizeChecker: (param0: number) => number;
    readonly openOptions: OpenOption[];
    // private checkBufferSize(arg0: number): number;
    getBufferSize(): number;
    getBufferSizeDefault(): number;
    getCharSequence(): CharSequence;
    getCharset(): Charset;
    getCharsetDefault(): Charset;
    getFile(): File;
    getInputStream(): InputStream;
    getOpenOptions(): OpenOption[];
    getOutputStream(): OutputStream;
    getPath(): Path[];
    getRandomAccessFile(): RandomAccessFile;
    getReader(): Reader;
    getWriter(): Writer;
    setBufferSize(arg0: number): B;
    setBufferSizeChecker(arg0: (param0: number) => number): B;
    setBufferSizeDefault(arg0: number): B;
    setBufferSizeMax(arg0: number): B;
    setCharset(arg0: Charset): B;
    setCharset(arg0: string): B;
    setCharsetDefault(arg0: Charset): B;
    setOpenOptions(arg0: OpenOption[]): B;
    // private throwIae(arg0: number, arg1: number): number;
}