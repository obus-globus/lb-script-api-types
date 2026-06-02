import type { WinDef$LONG } from '../../../../../com/sun/jna/platform/win32/WinDef$LONG.d.ts'
import type { ByReference } from '../../../../../com/sun/jna/ptr/ByReference.d.ts'
export class WinDef$LONGByReference extends ByReference {
    constructor()
    constructor(arg0: WinDef$LONG)
    getValue(): WinDef$LONG;
    setValue(arg0: WinDef$LONG): void;
}