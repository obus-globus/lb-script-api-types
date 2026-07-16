import type { ByteSource } from '../../../../com/google/common/io/ByteSource.d.ts'
import type { FileBackedOutputStream$State } from '../../../../com/google/common/io/FileBackedOutputStream$State.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class FileBackedOutputStream$FbosByteSource extends ByteSource {
    static concat(...paramsources: ByteSource[]): ByteSource;
    static concat(paramsources: ByteSource[]): ByteSource;
    static concat(paramsources: Iterator<ByteSource>): ByteSource;
    static empty(): ByteSource;
    static wrap(paramb: number[]): ByteSource;
    constructor(state: FileBackedOutputStream$State)
    // private state: FileBackedOutputStream$State;
    openStream(): InputStream;
}