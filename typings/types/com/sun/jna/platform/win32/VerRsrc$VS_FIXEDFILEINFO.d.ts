import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../com/sun/jna/Structure.d.ts'
import type { WinDef$DWORD } from '../../../../../com/sun/jna/platform/win32/WinDef$DWORD.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
export class VerRsrc$VS_FIXEDFILEINFO extends Structure {
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
    dwFileDateLS: WinDef$DWORD;
    dwFileDateMS: WinDef$DWORD;
    dwFileFlags: WinDef$DWORD;
    dwFileFlagsMask: WinDef$DWORD;
    dwFileOS: WinDef$DWORD;
    dwFileSubtype: WinDef$DWORD;
    dwFileType: WinDef$DWORD;
    dwFileVersionLS: WinDef$DWORD;
    dwFileVersionMS: WinDef$DWORD;
    dwProductVersionLS: WinDef$DWORD;
    dwProductVersionMS: WinDef$DWORD;
    dwSignature: WinDef$DWORD;
    dwStrucVersion: WinDef$DWORD;
    getFileVersionBuild(): number;
    getFileVersionMajor(): number;
    getFileVersionMinor(): number;
    getFileVersionRevision(): number;
    getProductVersionBuild(): number;
    getProductVersionMajor(): number;
    getProductVersionMinor(): number;
    getProductVersionRevision(): number;
}