import type { ByteSource } from '../../../../com/google/common/io/ByteSource.d.ts'
import type { CharSource } from '../../../../com/google/common/io/CharSource.d.ts'
import type { Reader } from '../../../../java/io/Reader.d.ts'
import type { Charset } from '../../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class ByteSource$AsCharSource extends CharSource {
    static concat(paramsources: (Object | null)[]): CharSource;
    static concat(paramsources: CharSource[]): CharSource;
    static concat(paramsources: Iterator<CharSource>): CharSource;
    static empty(): CharSource;
    static wrap(paramcharSequence: CharSequence): CharSource;
    constructor(null_: ByteSource, charset: Charset)
    // private charset: Charset;
    asByteSource(charset: Charset): ByteSource;
    openStream(): Reader;
    read(): string;
    toString(): string;
}