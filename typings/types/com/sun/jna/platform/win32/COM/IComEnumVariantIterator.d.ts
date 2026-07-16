import type { IDispatch } from '../../../../../../com/sun/jna/platform/win32/COM/util/IDispatch.d.ts'
import type { Variant$VARIANT } from '../../../../../../com/sun/jna/platform/win32/Variant$VARIANT.d.ts'
export class IComEnumVariantIterator {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static wrap(paramarg0: IDispatch): Variant$VARIANT[];
}