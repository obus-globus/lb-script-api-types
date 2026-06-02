import type { WinReg$HKEY } from '../../../../../com/sun/jna/platform/win32/WinReg$HKEY.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class NtDllUtil extends Object {
    static getKeyName(paramarg0: WinReg$HKEY): string;
    constructor()
}