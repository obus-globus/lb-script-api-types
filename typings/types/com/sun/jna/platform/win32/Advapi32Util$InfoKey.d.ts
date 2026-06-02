import type { WinBase$FILETIME } from '../../../../../com/sun/jna/platform/win32/WinBase$FILETIME.d.ts'
import type { WinReg$HKEY } from '../../../../../com/sun/jna/platform/win32/WinReg$HKEY.d.ts'
import type { IntByReference } from '../../../../../com/sun/jna/ptr/IntByReference.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Advapi32Util$InfoKey extends Object {
    constructor()
    constructor(arg0: WinReg$HKEY, arg1: number)
    hKey: WinReg$HKEY;
    lpClass: string[];
    lpcClass: IntByReference;
    lpcMaxClassLen: IntByReference;
    lpcMaxSubKeyLen: IntByReference;
    lpcMaxValueLen: IntByReference;
    lpcMaxValueNameLen: IntByReference;
    lpcSubKeys: IntByReference;
    lpcValues: IntByReference;
    lpcbSecurityDescriptor: IntByReference;
    lpftLastWriteTime: WinBase$FILETIME;
}