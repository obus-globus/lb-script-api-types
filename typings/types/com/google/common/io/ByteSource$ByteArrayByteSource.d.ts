import type { Optional } from '../../../../com/google/common/base/Optional.d.ts'
import type { HashCode } from '../../../../com/google/common/hash/HashCode.d.ts'
import type { HashFunction } from '../../../../com/google/common/hash/HashFunction.d.ts'
import type { ByteProcessor } from '../../../../com/google/common/io/ByteProcessor.d.ts'
import type { ByteSource } from '../../../../com/google/common/io/ByteSource.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class ByteSource$ByteArrayByteSource extends ByteSource {
    static concat(paramsources: (Object | null)[]): ByteSource;
    static concat(paramsources: (Object | null)[]): ByteSource;
    static concat(paramsources: Iterator<Object>): ByteSource;
    static empty(): ByteSource;
    static wrap(paramb: number[]): ByteSource;
    constructor(bytes: number[])
    constructor(bytes: number[], offset: number, length: number)
    // private bytes: number[];
    // private length: number;
    // private offset: number;
    copyTo(output: OutputStream): number;
    hash(hashFunction: HashFunction): HashCode;
    isEmpty(): boolean;
    openBufferedStream(): InputStream;
    openStream(): InputStream;
    read(): number[];
    read<T extends Object | number | string | boolean>(processor: ByteProcessor<T>): T;
    size(): number;
    sizeIfKnown(): Optional<number>;
    slice(offset: number, length: number): ByteSource;
    toString(): string;
}