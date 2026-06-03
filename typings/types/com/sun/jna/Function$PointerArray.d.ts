import type { Function$PostCallRead } from '../../../com/sun/jna/Function$PostCallRead.d.ts'
import type { Memory } from '../../../com/sun/jna/Memory.d.ts'
import type { Pointer } from '../../../com/sun/jna/Pointer.d.ts'
export class Function$PointerArray extends Memory implements Function$PostCallRead {
    static NULL: Pointer;
    static createConstant(paramarg0: number): Pointer;
    static createConstant(paramarg0: number): Pointer;
    static disposeAll(): void;
    static nativeValue(paramarg0: Pointer): number;
    static nativeValue(paramarg0: Pointer, paramarg1: number): void;
    static purge(): void;
    constructor(arg0: Pointer[])
    // private original: Pointer[];
    read(): void;
    read(arg0: number, arg1: Pointer[], arg2: number, arg3: number): void;
    read(arg0: number, arg1: number[], arg2: number, arg3: number): void;
    read(arg0: number, arg1: string[], arg2: number, arg3: number): void;
    read(arg0: number, arg1: number[], arg2: number, arg3: number): void;
    read(arg0: number, arg1: number[], arg2: number, arg3: number): void;
    read(arg0: number, arg1: number[], arg2: number, arg3: number): void;
    read(arg0: number, arg1: number[], arg2: number, arg3: number): void;
    read(arg0: number, arg1: number[], arg2: number, arg3: number): void;
}