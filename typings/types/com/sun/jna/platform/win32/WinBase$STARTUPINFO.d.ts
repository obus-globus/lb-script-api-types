import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../com/sun/jna/Structure.d.ts'
import type { WinDef$DWORD } from '../../../../../com/sun/jna/platform/win32/WinDef$DWORD.d.ts'
import type { WinDef$WORD } from '../../../../../com/sun/jna/platform/win32/WinDef$WORD.d.ts'
import type { WinNT$HANDLE } from '../../../../../com/sun/jna/platform/win32/WinNT$HANDLE.d.ts'
import type { ByteByReference } from '../../../../../com/sun/jna/ptr/ByteByReference.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
export class WinBase$STARTUPINFO extends Structure {
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
    cb: WinDef$DWORD;
    cbReserved2: WinDef$WORD;
    dwFillAttribute: WinDef$DWORD;
    dwFlags: number;
    dwX: WinDef$DWORD;
    dwXCountChars: WinDef$DWORD;
    dwXSize: WinDef$DWORD;
    dwY: WinDef$DWORD;
    dwYCountChars: WinDef$DWORD;
    dwYSize: WinDef$DWORD;
    hStdError: WinNT$HANDLE;
    hStdInput: WinNT$HANDLE;
    hStdOutput: WinNT$HANDLE;
    lpDesktop: string;
    lpReserved: string;
    lpReserved2: ByteByReference;
    lpTitle: string;
    wShowWindow: WinDef$WORD;
}