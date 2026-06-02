import type { WinDef$USHORT } from '../../../../../com/sun/jna/platform/win32/WinDef$USHORT.d.ts'
import type { ByReference } from '../../../../../com/sun/jna/ptr/ByReference.d.ts'
export class WinDef$USHORTByReference extends ByReference {
    constructor()
    constructor(arg0: WinDef$USHORT)
    constructor(arg0: number)
    getValue(): WinDef$USHORT;
    setValue(arg0: WinDef$USHORT): void;
}