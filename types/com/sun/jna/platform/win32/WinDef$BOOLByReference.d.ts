import type { WinDef$BOOL } from '../../../../../com/sun/jna/platform/win32/WinDef$BOOL.d.ts'
import type { ByReference } from '../../../../../com/sun/jna/ptr/ByReference.d.ts'
export class WinDef$BOOLByReference extends ByReference {
    constructor()
    constructor(arg0: WinDef$BOOL)
    getValue(): WinDef$BOOL;
    setValue(arg0: WinDef$BOOL): void;
}