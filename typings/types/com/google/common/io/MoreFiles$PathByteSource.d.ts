import type { Optional } from '../../../../com/google/common/base/Optional.d.ts'
import type { ByteProcessor } from '../../../../com/google/common/io/ByteProcessor.d.ts'
import type { ByteSource } from '../../../../com/google/common/io/ByteSource.d.ts'
import type { CharSource } from '../../../../com/google/common/io/CharSource.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { Charset } from '../../../../java/nio/charset/Charset.d.ts'
import type { OpenOption } from '../../../../java/nio/file/OpenOption.d.ts'
import type { Path } from '../../../../java/nio/file/Path.d.ts'
import type { BasicFileAttributes } from '../../../../java/nio/file/attribute/BasicFileAttributes.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class MoreFiles$PathByteSource extends ByteSource {
    static concat(paramsources: (Object | null)[]): ByteSource;
    static concat(paramsources: ByteSource[]): ByteSource;
    static concat(paramsources: Iterator<ByteSource>): ByteSource;
    static empty(): ByteSource;
    static wrap(paramb: number[]): ByteSource;
    private constructor(path: Path[], options: OpenOption[])
    // private followLinks: boolean;
    // private options: OpenOption[];
    // private path: Path[];
    asCharSource(charset: Charset): CharSource;
    openStream(): InputStream;
    read(): number[];
    read<T extends unknown>(processor: ByteProcessor<T>): T;
    // private readAttributes(): BasicFileAttributes;
    size(): number;
    sizeIfKnown(): Optional<number>;
    toString(): string;
}