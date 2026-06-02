import type { WinDef$DWORD } from '../../../../../com/sun/jna/platform/win32/WinDef$DWORD.d.ts'
import type { ByReference } from '../../../../../com/sun/jna/ptr/ByReference.d.ts'
export class WinDef$DWORDByReference extends ByReference {
    constructor()
    constructor(arg0: WinDef$DWORD)
    getValue(): WinDef$DWORD;
    setValue(arg0: WinDef$DWORD): void;
}