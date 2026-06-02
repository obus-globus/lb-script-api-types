import type { WinDef$WORD } from '../../../../../com/sun/jna/platform/win32/WinDef$WORD.d.ts'
import type { ByReference } from '../../../../../com/sun/jna/ptr/ByReference.d.ts'
export class WinDef$WORDByReference extends ByReference {
    constructor()
    constructor(arg0: WinDef$WORD)
    getValue(): WinDef$WORD;
    setValue(arg0: WinDef$WORD): void;
}