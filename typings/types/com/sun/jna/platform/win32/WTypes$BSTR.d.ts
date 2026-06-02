import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { PointerType } from '../../../../../com/sun/jna/PointerType.d.ts'
export class WTypes$BSTR extends PointerType {
    constructor()
    constructor(arg0: Pointer)
    constructor(arg0: string)
    getValue(): string;
    setValue(arg0: string): void;
    toString(): string;
}