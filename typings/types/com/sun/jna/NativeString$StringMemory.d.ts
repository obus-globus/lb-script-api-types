import type { Memory } from '../../../com/sun/jna/Memory.d.ts'
import type { NativeString } from '../../../com/sun/jna/NativeString.d.ts'
import type { Pointer } from '../../../com/sun/jna/Pointer.d.ts'
export class NativeString$StringMemory extends Memory {
    static NULL: Pointer;
    static createConstant(paramarg0: number): Pointer;
    static createConstant(paramarg0: number): Pointer;
    static disposeAll(): void;
    static nativeValue(paramarg0: Pointer): number;
    static nativeValue(paramarg0: Pointer, paramarg1: number): void;
    static purge(): void;
    constructor(null_: NativeString, arg1: number)
    toString(): string;
}