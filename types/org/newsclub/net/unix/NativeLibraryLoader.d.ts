import type { Closeable } from '../../../../java/io/Closeable.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { UnsatisfiedLinkError } from '../../../../java/lang/UnsatisfiedLinkError.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
import type { NativeLibraryLoader$LibraryCandidate } from '../../../../org/newsclub/net/unix/NativeLibraryLoader$LibraryCandidate.d.ts'
export class NativeLibraryLoader extends Object implements Closeable {
    static getJunixsocketVersion(): string;
    constructor()
    close(): void;
    // private findLibraryCandidates(arg0: string, arg1: string, arg2: Class<Object>): NativeLibraryLoader$LibraryCandidate[];
    // private initCantLoadLibraryError(arg0: Throwable[]): UnsatisfiedLinkError;
    // private initLibraryCandidates(arg0: Throwable[]): NativeLibraryLoader$LibraryCandidate[];
    loadLibrary(): void;
    // private loadLibraryOverride(): Throwable;
    // private nodepsPath(arg0: string): string;
    // private setLoaded(arg0: string): void;
    // private tryProviderClass(arg0: string, arg1: string): NativeLibraryLoader$LibraryCandidate[];
}