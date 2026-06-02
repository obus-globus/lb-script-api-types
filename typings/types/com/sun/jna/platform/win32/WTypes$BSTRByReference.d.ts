import type { WTypes$BSTR } from '../../../../../com/sun/jna/platform/win32/WTypes$BSTR.d.ts'
import type { ByReference } from '../../../../../com/sun/jna/ptr/ByReference.d.ts'
export class WTypes$BSTRByReference extends ByReference {
    constructor()
    constructor(arg0: WTypes$BSTR)
    getString(): string;
    getValue(): WTypes$BSTR;
    setValue(arg0: WTypes$BSTR): void;
}