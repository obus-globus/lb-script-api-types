import type { Memory } from '../../../com/sun/jna/Memory.d.ts'
import type { Pointer } from '../../../com/sun/jna/Pointer.d.ts'
export class Memory$SharedMemory extends Memory {
    static NULL: Pointer;
    static createConstant(paramarg0: number): Pointer;
    static createConstant(paramarg0: number): Pointer;
    static disposeAll(): void;
    static nativeValue(paramarg0: Pointer): number;
    static nativeValue(paramarg0: Pointer, paramarg1: number): void;
    static purge(): void;
    constructor(null_: Memory$SharedMemory, arg1: number, arg2: number)
    boundsCheck(arg0: number, arg1: number): void;
    dispose(): void;
    toString(): string;
}