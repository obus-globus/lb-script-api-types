import type { Pointer$Default } from '../../../org/lwjgl/system/Pointer$Default.d.ts'
import type { SharedLibrary } from '../../../org/lwjgl/system/SharedLibrary.d.ts'
export abstract class SharedLibrary$Default extends Pointer$Default implements SharedLibrary {
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    constructor(arg0: string, arg1: number)
    readonly name: string;
    getName(): string;
}