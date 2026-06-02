import type { BaseTSD$ULONG_PTR } from '../../../../../com/sun/jna/platform/win32/BaseTSD$ULONG_PTR.d.ts'
import type { ByReference } from '../../../../../com/sun/jna/ptr/ByReference.d.ts'
export class BaseTSD$ULONG_PTRByReference extends ByReference {
    constructor()
    constructor(arg0: BaseTSD$ULONG_PTR)
    getValue(): BaseTSD$ULONG_PTR;
    setValue(arg0: BaseTSD$ULONG_PTR): void;
}