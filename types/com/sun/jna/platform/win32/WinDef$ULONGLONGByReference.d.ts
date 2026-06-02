import type { WinDef$ULONGLONG } from '../../../../../com/sun/jna/platform/win32/WinDef$ULONGLONG.d.ts'
import type { ByReference } from '../../../../../com/sun/jna/ptr/ByReference.d.ts'
export class WinDef$ULONGLONGByReference extends ByReference {
    constructor()
    constructor(arg0: WinDef$ULONGLONG)
    getValue(): WinDef$ULONGLONG;
    setValue(arg0: WinDef$ULONGLONG): void;
}