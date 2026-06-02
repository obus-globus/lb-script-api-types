import type { WTypes$VARTYPE } from '../../../../../com/sun/jna/platform/win32/WTypes$VARTYPE.d.ts'
import type { ByReference } from '../../../../../com/sun/jna/ptr/ByReference.d.ts'
export class WTypes$VARTYPEByReference extends ByReference {
    constructor()
    constructor(arg0: WTypes$VARTYPE)
    constructor(arg0: number)
    getValue(): WTypes$VARTYPE;
    setValue(arg0: WTypes$VARTYPE): void;
}