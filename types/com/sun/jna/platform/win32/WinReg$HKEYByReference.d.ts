import type { WinReg$HKEY } from '../../../../../com/sun/jna/platform/win32/WinReg$HKEY.d.ts'
import type { ByReference } from '../../../../../com/sun/jna/ptr/ByReference.d.ts'
export class WinReg$HKEYByReference extends ByReference {
    constructor()
    constructor(arg0: WinReg$HKEY)
    getValue(): WinReg$HKEY;
    setValue(arg0: WinReg$HKEY): void;
}