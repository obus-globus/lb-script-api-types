import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../com/sun/jna/Structure.d.ts'
import type { WinDef$HINSTANCE } from '../../../../../com/sun/jna/platform/win32/WinDef$HINSTANCE.d.ts'
import type { WinDef$HWND } from '../../../../../com/sun/jna/platform/win32/WinDef$HWND.d.ts'
import type { WinNT$HANDLE } from '../../../../../com/sun/jna/platform/win32/WinNT$HANDLE.d.ts'
import type { WinReg$HKEY } from '../../../../../com/sun/jna/platform/win32/WinReg$HKEY.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
export class ShellAPI$SHELLEXECUTEINFO extends Structure {
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
    static newInstance(paramarg0: Class<Structure>): Structure | null;
    static newInstance(paramarg0: Class<Structure>, paramarg1: Pointer): Structure | null;
    constructor()
    cbSize: number;
    dwHotKey: number;
    fMask: number;
    hInstApp: WinDef$HINSTANCE;
    hKeyClass: WinReg$HKEY;
    hMonitor: WinNT$HANDLE;
    hProcess: WinNT$HANDLE;
    hwnd: WinDef$HWND;
    lpClass: string;
    lpDirectory: string;
    lpFile: string;
    lpIDList: Pointer;
    lpParameters: string;
    lpVerb: string;
    nShow: number;
}