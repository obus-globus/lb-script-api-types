import type { Function$PostCallRead } from '../../../com/sun/jna/Function$PostCallRead.d.ts'
import type { Memory } from '../../../com/sun/jna/Memory.d.ts'
import type { NativeMapped } from '../../../com/sun/jna/NativeMapped.d.ts'
import type { Pointer } from '../../../com/sun/jna/Pointer.d.ts'
export class Function$NativeMappedArray extends Memory implements Function$PostCallRead {
    static NULL: Pointer;
    static createConstant(paramarg0: number): Pointer;
    static createConstant(paramarg0: number): Pointer;
    static disposeAll(): void;
    static nativeValue(paramarg0: Pointer): number;
    static nativeValue(paramarg0: Pointer, paramarg1: number): void;
    static purge(): void;
    constructor(arg0: NativeMapped[])
    // private original: NativeMapped[];
    read(): void;
}