import type { WinDef$UINT } from '../../../../../com/sun/jna/platform/win32/WinDef$UINT.d.ts'
import type { ByReference } from '../../../../../com/sun/jna/ptr/ByReference.d.ts'
export class WinDef$UINTByReference extends ByReference {
    constructor()
    constructor(arg0: WinDef$UINT)
    getValue(): WinDef$UINT;
    setValue(arg0: WinDef$UINT): void;
}