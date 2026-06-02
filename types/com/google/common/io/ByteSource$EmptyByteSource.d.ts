import type { ByteSource } from '../../../../com/google/common/io/ByteSource.d.ts'
import type { ByteSource$ByteArrayByteSource } from '../../../../com/google/common/io/ByteSource$ByteArrayByteSource.d.ts'
import type { CharSource } from '../../../../com/google/common/io/CharSource.d.ts'
import type { Charset } from '../../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class ByteSource$EmptyByteSource extends ByteSource$ByteArrayByteSource {
    static concat(paramsources: (Object | null)[]): ByteSource;
    static concat(paramsources: (Object | null)[]): ByteSource;
    static concat(paramsources: Iterator<Object>): ByteSource;
    static empty(): ByteSource;
    static wrap(paramb: number[]): ByteSource;
    constructor()
    asCharSource(charset: Charset): CharSource;
    read(): number[];
    toString(): string;
}