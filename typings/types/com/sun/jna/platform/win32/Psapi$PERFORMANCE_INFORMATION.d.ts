import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../com/sun/jna/Structure.d.ts'
import type { BaseTSD$SIZE_T } from '../../../../../com/sun/jna/platform/win32/BaseTSD$SIZE_T.d.ts'
import type { WinDef$DWORD } from '../../../../../com/sun/jna/platform/win32/WinDef$DWORD.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Psapi$PERFORMANCE_INFORMATION extends Structure {
    static ALIGN_DEFAULT: number;
    static ALIGN_GNUC: number;
    static ALIGN_MSVC: number;
    static ALIGN_NONE: number;
    static autoRead(paramarg0: (Object | null)[]): void;
    static autoWrite(paramarg0: (Object | null)[]): void;
    static createFieldsOrder(paramarg0: string): string[];
    static createFieldsOrder(paramarg0: (Object | null)[]): string[];
    static createFieldsOrder(paramarg0: string[], paramarg1: (Object | null)[]): string[];
    static createFieldsOrder(paramarg0: string[], paramarg1: string[]): string[];
    static newInstance(paramarg0: Class<Structure>): Structure | null;
    static newInstance(paramarg0: Class<Structure>, paramarg1: Pointer): Structure | null;
    constructor()
    CommitLimit: BaseTSD$SIZE_T;
    CommitPeak: BaseTSD$SIZE_T;
    CommitTotal: BaseTSD$SIZE_T;
    HandleCount: WinDef$DWORD;
    KernelNonpaged: BaseTSD$SIZE_T;
    KernelPaged: BaseTSD$SIZE_T;
    KernelTotal: BaseTSD$SIZE_T;
    PageSize: BaseTSD$SIZE_T;
    PhysicalAvailable: BaseTSD$SIZE_T;
    PhysicalTotal: BaseTSD$SIZE_T;
    ProcessCount: WinDef$DWORD;
    SystemCache: BaseTSD$SIZE_T;
    ThreadCount: WinDef$DWORD;
    cb: WinDef$DWORD;
}