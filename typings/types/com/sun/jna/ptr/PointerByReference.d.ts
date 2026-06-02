import type { Pointer } from '../../../../com/sun/jna/Pointer.d.ts'
import type { ByReference } from '../../../../com/sun/jna/ptr/ByReference.d.ts'
export class PointerByReference extends ByReference {
    constructor()
    constructor(arg0: Pointer)
    getValue(): Pointer;
    setValue(arg0: Pointer): void;
}