import type { Memory } from '../../../com/sun/jna/Memory.d.ts'
import type { Pointer } from '../../../com/sun/jna/Pointer.d.ts'
export class Structure$AutoAllocated extends Memory {
    static NULL: Pointer;
    static createConstant(paramarg0: number): Pointer;
    static createConstant(paramarg0: number): Pointer;
    static disposeAll(): void;
    static nativeValue(paramarg0: Pointer): number;
    static nativeValue(paramarg0: Pointer, paramarg1: number): void;
    static purge(): void;
    constructor(arg0: number)
    toString(): string;
}