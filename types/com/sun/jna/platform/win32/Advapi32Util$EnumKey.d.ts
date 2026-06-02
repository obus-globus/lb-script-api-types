import type { WinBase$FILETIME } from '../../../../../com/sun/jna/platform/win32/WinBase$FILETIME.d.ts'
import type { WinReg$HKEY } from '../../../../../com/sun/jna/platform/win32/WinReg$HKEY.d.ts'
import type { IntByReference } from '../../../../../com/sun/jna/ptr/IntByReference.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Advapi32Util$EnumKey extends Object {
    constructor()
    constructor(arg0: WinReg$HKEY, arg1: number)
    dwIndex: number;
    hKey: WinReg$HKEY;
    lpClass: string[];
    lpName: string[];
    lpcName: IntByReference;
    lpcbClass: IntByReference;
    lpftLastWriteTime: WinBase$FILETIME;
}