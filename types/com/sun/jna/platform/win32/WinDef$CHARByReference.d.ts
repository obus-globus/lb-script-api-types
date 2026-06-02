import type { WinDef$CHAR } from '../../../../../com/sun/jna/platform/win32/WinDef$CHAR.d.ts'
import type { ByReference } from '../../../../../com/sun/jna/ptr/ByReference.d.ts'
export class WinDef$CHARByReference extends ByReference {
    constructor()
    constructor(arg0: WinDef$CHAR)
    getValue(): WinDef$CHAR;
    setValue(arg0: WinDef$CHAR): void;
}