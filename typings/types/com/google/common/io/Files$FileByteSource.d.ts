import type { Optional } from '../../../../com/google/common/base/Optional.d.ts'
import type { ByteProcessor } from '../../../../com/google/common/io/ByteProcessor.d.ts'
import type { ByteSource } from '../../../../com/google/common/io/ByteSource.d.ts'
import type { LineProcessor } from '../../../../com/google/common/io/LineProcessor.d.ts'
import type { File } from '../../../../java/io/File.d.ts'
import type { FileInputStream } from '../../../../java/io/FileInputStream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class Files$FileByteSource extends ByteSource {
    static concat(paramsources: (Object | null)[]): ByteSource;
    static concat(paramsources: ByteSource[]): ByteSource;
    static concat(paramsources: Iterator<ByteSource>): ByteSource;
    static empty(): ByteSource;
    static wrap(paramb: number[]): ByteSource;
    constructor(arg0: File, arg1: LineProcessor<string[]>)
    // private file: File;
    openStream(): FileInputStream;
    read(): number[];
    read<T extends unknown>(processor: ByteProcessor<T>): T;
    size(): number;
    sizeIfKnown(): Optional<number>;
    toString(): string;
}