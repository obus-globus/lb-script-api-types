import type { File } from '../../../../java/io/File.d.ts'
import type { URL } from '../../../../java/net/URL.d.ts'
import type { NativeLibraryLoader$LibraryCandidate } from '../../../../org/newsclub/net/unix/NativeLibraryLoader$LibraryCandidate.d.ts'
export class NativeLibraryLoader$ClasspathLibraryCandidate extends NativeLibraryLoader$LibraryCandidate {
    constructor(arg0: string, arg1: string, arg2: string, arg3: URL)
    // private artifactName: string;
    // private library: URL;
    // private path: string;
    close(): void;
    // private deleteLibTmpDelFiles(arg0: File): void;
    load(): string;
    toString(): string;
}