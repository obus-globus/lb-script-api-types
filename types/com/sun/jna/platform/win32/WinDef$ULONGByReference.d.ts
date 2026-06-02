import type { WinDef$ULONG } from '../../../../../com/sun/jna/platform/win32/WinDef$ULONG.d.ts'
import type { ByReference } from '../../../../../com/sun/jna/ptr/ByReference.d.ts'
export class WinDef$ULONGByReference extends ByReference {
    constructor()
    constructor(arg0: WinDef$ULONG)
    getValue(): WinDef$ULONG;
    setValue(arg0: WinDef$ULONG): void;
}