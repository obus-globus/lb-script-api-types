import type { FilterInputStream } from '../../../../../java/io/FilterInputStream.d.ts'
import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { Charset } from '../../../../../java/nio/charset/Charset.d.ts'
import type { ArchiveEntry } from '../../../../../org/apache/commons/compress/archivers/ArchiveEntry.d.ts'
import type { IOConsumer } from '../../../../../org/apache/commons/io/function/IOConsumer.d.ts'
import type { IOIterator } from '../../../../../org/apache/commons/io/function/IOIterator.d.ts'
export abstract class ArchiveInputStream<E extends ArchiveEntry> extends FilterInputStream {
    static nullInputStream(): InputStream;
    constructor()
    constructor(arg0: InputStream, arg1: string)
    readonly bytesRead: number;
    readonly charset: Charset;
    // private single: number[];
    canReadEntryData(arg0: ArchiveEntry): boolean;
    count(arg0: number): void;
    forEach(arg0: (param0: E) => void): void;
    getBytesRead(): number;
    getCharset(): Charset;
    getCount(): number;
    getNextEntry(): E;
    iterator(): IOIterator<E>;
    mark(arg0: number): void;
    markSupported(): boolean;
    pushedBackBytes(arg0: number): void;
    read(): number;
    read(arg0: number[]): number;
    read(arg0: number[], arg1: number, arg2: number): number;
    reset(): void;
}