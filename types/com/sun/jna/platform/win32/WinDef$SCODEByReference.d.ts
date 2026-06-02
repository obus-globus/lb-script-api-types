import type { WinDef$SCODE } from '../../../../../com/sun/jna/platform/win32/WinDef$SCODE.d.ts'
import type { ByReference } from '../../../../../com/sun/jna/ptr/ByReference.d.ts'
export class WinDef$SCODEByReference extends ByReference {
    constructor()
    constructor(arg0: WinDef$SCODE)
    getValue(): WinDef$SCODE;
    setValue(arg0: WinDef$SCODE): void;
}