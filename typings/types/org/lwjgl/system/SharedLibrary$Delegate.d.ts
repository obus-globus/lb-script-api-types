import type { Object } from '../../../java/lang/Object.d.ts'
import type { SharedLibrary } from '../../../org/lwjgl/system/SharedLibrary.d.ts'
export abstract class SharedLibrary$Delegate extends Object implements SharedLibrary {
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    constructor(arg0: SharedLibrary)
    // private library: SharedLibrary;
    address(): number;
    free(): void;
    getName(): string;
    getPath(): string;
}