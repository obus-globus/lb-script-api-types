import type { Optional } from '../../../../com/google/common/base/Optional.d.ts'
import type { ByteSource } from '../../../../com/google/common/io/ByteSource.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class ByteSource$SlicedByteSource extends ByteSource {
    static concat(paramsources: (Object | null)[]): ByteSource;
    static concat(paramsources: (Object | null)[]): ByteSource;
    static concat(paramsources: Iterator<Object>): ByteSource;
    static empty(): ByteSource;
    static wrap(paramb: number[]): ByteSource;
    constructor(null_: ByteSource$SlicedByteSource, offset: number, length: number)
    // private length: number;
    // private offset: number;
    isEmpty(): boolean;
    openBufferedStream(): InputStream;
    openStream(): InputStream;
    sizeIfKnown(): Optional<number>;
    slice(offset: number, length: number): ByteSource;
    // private sliceStream(in_: InputStream): InputStream;
    toString(): string;
}