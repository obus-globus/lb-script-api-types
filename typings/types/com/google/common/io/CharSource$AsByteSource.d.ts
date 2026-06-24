import type { ByteSource } from '../../../../com/google/common/io/ByteSource.d.ts'
import type { CharSource } from '../../../../com/google/common/io/CharSource.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { Charset } from '../../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class CharSource$AsByteSource extends ByteSource {
    static concat(paramsources: (Object | null)[]): ByteSource;
    static concat(paramsources: ByteSource[]): ByteSource;
    static concat(paramsources: Iterator<ByteSource>): ByteSource;
    static empty(): ByteSource;
    static wrap(paramb: number[]): ByteSource;
    constructor(null_: CharSource, charset: Charset)
    // private charset: Charset;
    asCharSource(charset: Charset): CharSource;
    openStream(): InputStream;
    toString(): string;
}