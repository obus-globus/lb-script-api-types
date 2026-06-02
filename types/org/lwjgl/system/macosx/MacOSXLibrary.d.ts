import type { SharedLibrary$Default } from '../../../../org/lwjgl/system/SharedLibrary$Default.d.ts'
export abstract class MacOSXLibrary extends SharedLibrary$Default {
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static create(paramarg0: string): MacOSXLibrary;
    static getWithIdentifier(paramarg0: string): MacOSXLibrary;
    constructor(arg0: string, arg1: number)
}