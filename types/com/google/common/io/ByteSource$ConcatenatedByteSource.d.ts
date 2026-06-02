import type { Optional } from '../../../../com/google/common/base/Optional.d.ts'
import type { ByteSource } from '../../../../com/google/common/io/ByteSource.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class ByteSource$ConcatenatedByteSource extends ByteSource {
    static concat(paramsources: (Object | null)[]): ByteSource;
    static concat(paramsources: (Object | null)[]): ByteSource;
    static concat(paramsources: Iterator<Object>): ByteSource;
    static empty(): ByteSource;
    static wrap(paramb: number[]): ByteSource;
    constructor(sources: ByteSource[])
    // private sources: ByteSource[];
    isEmpty(): boolean;
    openStream(): InputStream;
    size(): number;
    sizeIfKnown(): Optional<number>;
    toString(): string;
}