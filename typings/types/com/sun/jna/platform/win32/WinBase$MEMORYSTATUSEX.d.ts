import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../com/sun/jna/Structure.d.ts'
import type { WinDef$DWORD } from '../../../../../com/sun/jna/platform/win32/WinDef$DWORD.d.ts'
import type { WinDef$DWORDLONG } from '../../../../../com/sun/jna/platform/win32/WinDef$DWORDLONG.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
export class WinBase$MEMORYSTATUSEX extends Structure {
    static ALIGN_DEFAULT: number;
    static ALIGN_GNUC: number;
    static ALIGN_MSVC: number;
    static ALIGN_NONE: number;
    static autoRead(paramarg0: Structure[]): void;
    static autoWrite(paramarg0: Structure[]): void;
    static createFieldsOrder(paramarg0: string): string[];
    static createFieldsOrder(...paramarg0: string[]): string[];
    static createFieldsOrder(paramarg0: string[], ...paramarg1: string[]): string[];
    static createFieldsOrder(paramarg0: string[], paramarg1: string[]): string[];
    static newInstance<T extends Structure>(paramarg0: Class<T>): T;
    static newInstance<T extends Structure>(paramarg0: Class<T>, paramarg1: Pointer): T;
    constructor()
    dwLength: WinDef$DWORD;
    dwMemoryLoad: WinDef$DWORD;
    ullAvailExtendedVirtual: WinDef$DWORDLONG;
    ullAvailPageFile: WinDef$DWORDLONG;
    ullAvailPhys: WinDef$DWORDLONG;
    ullAvailVirtual: WinDef$DWORDLONG;
    ullTotalPageFile: WinDef$DWORDLONG;
    ullTotalPhys: WinDef$DWORDLONG;
    ullTotalVirtual: WinDef$DWORDLONG;
}