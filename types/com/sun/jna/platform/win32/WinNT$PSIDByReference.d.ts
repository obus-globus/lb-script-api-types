import type { WinNT$PSID } from '../../../../../com/sun/jna/platform/win32/WinNT$PSID.d.ts'
import type { ByReference } from '../../../../../com/sun/jna/ptr/ByReference.d.ts'
export class WinNT$PSIDByReference extends ByReference {
    constructor()
    constructor(arg0: WinNT$PSID)
    getValue(): WinNT$PSID;
    setValue(arg0: WinNT$PSID): void;
}