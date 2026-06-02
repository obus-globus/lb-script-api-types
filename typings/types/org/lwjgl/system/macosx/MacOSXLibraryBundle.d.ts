import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { MacOSXLibrary } from '../../../../org/lwjgl/system/macosx/MacOSXLibrary.d.ts'
export class MacOSXLibraryBundle extends MacOSXLibrary {
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static create(paramarg0: string): MacOSXLibrary;
    static create(paramarg0: string): MacOSXLibraryBundle;
    static getWithIdentifier(paramarg0: string): MacOSXLibrary;
    static getWithIdentifier(paramarg0: string): MacOSXLibraryBundle;
    constructor(arg0: string, arg1: number)
    free(): void;
    getFunctionAddress(arg0: ByteBuffer): number;
    getPath(): string;
}