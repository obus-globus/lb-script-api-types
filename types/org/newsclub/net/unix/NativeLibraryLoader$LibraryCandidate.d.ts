import type { Closeable } from '../../../../java/io/Closeable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class NativeLibraryLoader$LibraryCandidate extends Object implements Closeable {
    constructor(arg0: string)
    // private libraryNameAndVersion: string;
    close(): void;
    load(): string;
    toString(): string;
}