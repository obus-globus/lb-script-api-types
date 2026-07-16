import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../com/sun/jna/Structure.d.ts'
import type { WinDef$DWORD } from '../../../../../com/sun/jna/platform/win32/WinDef$DWORD.d.ts'
import type { WinDef$HMODULE } from '../../../../../com/sun/jna/platform/win32/WinDef$HMODULE.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
export class Tlhelp32$MODULEENTRY32W extends Structure {
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
    constructor(arg0: Pointer)
    GlblcntUsage: WinDef$DWORD;
    ProccntUsage: WinDef$DWORD;
    dwSize: WinDef$DWORD;
    hModule: WinDef$HMODULE;
    modBaseAddr: Pointer;
    modBaseSize: WinDef$DWORD;
    szExePath: string[];
    szModule: string[];
    th32ModuleID: WinDef$DWORD;
    th32ProcessID: WinDef$DWORD;
}