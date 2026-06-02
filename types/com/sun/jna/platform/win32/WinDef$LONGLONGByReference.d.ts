import type { WinDef$LONGLONG } from '../../../../../com/sun/jna/platform/win32/WinDef$LONGLONG.d.ts'
import type { ByReference } from '../../../../../com/sun/jna/ptr/ByReference.d.ts'
export class WinDef$LONGLONGByReference extends ByReference {
    constructor()
    constructor(arg0: WinDef$LONGLONG)
    getValue(): WinDef$LONGLONG;
    setValue(arg0: WinDef$LONGLONG): void;
}