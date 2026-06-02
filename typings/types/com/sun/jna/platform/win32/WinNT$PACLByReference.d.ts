import type { WinNT$ACL } from '../../../../../com/sun/jna/platform/win32/WinNT$ACL.d.ts'
import type { ByReference } from '../../../../../com/sun/jna/ptr/ByReference.d.ts'
export class WinNT$PACLByReference extends ByReference {
    constructor()
    constructor(arg0: WinNT$ACL)
    getValue(): WinNT$ACL;
    setValue(arg0: WinNT$ACL): void;
}