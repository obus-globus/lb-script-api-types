import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../../../java/io/OutputStream.d.ts'
import type { RandomAccessFile } from '../../../../../java/io/RandomAccessFile.d.ts'
import type { Reader } from '../../../../../java/io/Reader.d.ts'
import type { Writer } from '../../../../../java/io/Writer.d.ts'
import type { Charset } from '../../../../../java/nio/charset/Charset.d.ts'
import type { OpenOption } from '../../../../../java/nio/file/OpenOption.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
import type { AbstractOrigin } from '../../../../../org/apache/commons/io/build/AbstractOrigin.d.ts'
export abstract class AbstractOrigin$AbstractRandomAccessFileOrigin<T extends RandomAccessFile, B extends AbstractOrigin$AbstractRandomAccessFileOrigin<T, B>> extends AbstractOrigin<T, B> {
    constructor(arg0: T)
    getByteArray(): number[];
    getByteArray(arg0: number, arg1: number): number[];
    getCharSequence(arg0: Charset): CharSequence;
    getInputStream(arg0: OpenOption[]): InputStream;
    getOutputStream(arg0: OpenOption[]): OutputStream;
    getRandomAccessFile(arg0: OpenOption[]): T;
    getReader(arg0: Charset): Reader;
    getWriter(arg0: Charset, arg1: OpenOption[]): Writer;
    size(): number;
}