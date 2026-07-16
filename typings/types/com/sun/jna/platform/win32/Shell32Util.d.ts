import type { Guid$GUID } from '../../../../../com/sun/jna/platform/win32/Guid$GUID.d.ts'
import type { WinDef$DWORD } from '../../../../../com/sun/jna/platform/win32/WinDef$DWORD.d.ts'
import type { WinDef$HWND } from '../../../../../com/sun/jna/platform/win32/WinDef$HWND.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class Shell32Util extends Object {
    static CommandLineToArgv(paramarg0: string): string[];
    static getFolderPath(paramarg0: WinDef$HWND, paramarg1: number, paramarg2: WinDef$DWORD): string;
    static getFolderPath(paramarg0: number): string;
    static getKnownFolderPath(paramarg0: Guid$GUID): string;
    static getSpecialFolderPath(paramarg0: number, paramarg1: boolean): string;
    constructor()
}