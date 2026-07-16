import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../java/util/Iterator.d.ts'
import type { ArchiveEntry } from '../../../../../org/apache/commons/compress/archivers/ArchiveEntry.d.ts'
import type { ArchiveInputStream } from '../../../../../org/apache/commons/compress/archivers/ArchiveInputStream.d.ts'
import type { IOConsumer } from '../../../../../org/apache/commons/io/function/IOConsumer.d.ts'
import type { IOIterator } from '../../../../../org/apache/commons/io/function/IOIterator.d.ts'
export class ArchiveInputStream$ArchiveEntryIOIterator extends Object implements IOIterator<E> {
    static adapt<E extends unknown>(paramarg0: E[]): IOIterator<E>;
    static adapt<E extends unknown>(paramarg0: Iterator<E>): IOIterator<E>;
    constructor(null_: ArchiveInputStream<ArchiveEntry>)
    // private next: E;
    asIterator<E extends ArchiveEntry>(): Iterator<E>;
    forEachRemaining<E extends ArchiveEntry>(arg0: (param0: E) => void): void;
    hasNext(): boolean;
    next<E extends ArchiveEntry>(): E;
    remove(): void;
    unwrap<E extends ArchiveEntry>(): Iterator<E>;
}