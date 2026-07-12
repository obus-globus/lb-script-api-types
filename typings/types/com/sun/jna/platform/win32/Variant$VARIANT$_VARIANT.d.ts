import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../com/sun/jna/Structure.d.ts'
import type { Variant$VARIANT$_VARIANT$__VARIANT } from '../../../../../com/sun/jna/platform/win32/Variant$VARIANT$_VARIANT$__VARIANT.d.ts'
import type { WTypes$VARTYPE } from '../../../../../com/sun/jna/platform/win32/WTypes$VARTYPE.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Variant$VARIANT$_VARIANT extends Structure {
    static ALIGN_DEFAULT: number;
    static ALIGN_GNUC: number;
    static ALIGN_MSVC: number;
    static ALIGN_NONE: number;
    static autoRead(paramarg0: (Object | null)[]): void;
    static autoWrite(paramarg0: (Object | null)[]): void;
    static createFieldsOrder(paramarg0: string): string[];
    static createFieldsOrder(...paramarg0: (Object | null)[]): string[];
    static createFieldsOrder(paramarg0: string[], ...paramarg1: (Object | null)[]): string[];
    static createFieldsOrder(paramarg0: string[], paramarg1: string[]): string[];
    static newInstance(paramarg0: Class<Structure>): Structure | null;
    static newInstance(paramarg0: Class<Structure>, paramarg1: Pointer): Structure | null;
    constructor()
    constructor(arg0: Pointer)
    __variant: Variant$VARIANT$_VARIANT$__VARIANT;
    vt: WTypes$VARTYPE;
    wReserved1: number;
    wReserved2: number;
    wReserved3: number;
}