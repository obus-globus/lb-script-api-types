import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../com/sun/jna/Structure.d.ts'
import type { OaIdl$DISPID } from '../../../../../com/sun/jna/platform/win32/OaIdl$DISPID.d.ts'
import type { Variant$VARIANT } from '../../../../../com/sun/jna/platform/win32/Variant$VARIANT.d.ts'
import type { Variant$VariantArg$ByReference } from '../../../../../com/sun/jna/platform/win32/Variant$VariantArg$ByReference.d.ts'
import type { WinDef$UINT } from '../../../../../com/sun/jna/platform/win32/WinDef$UINT.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class OleAuto$DISPPARAMS extends Structure {
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
    cArgs: WinDef$UINT;
    cNamedArgs: WinDef$UINT;
    rgdispidNamedArgs: Pointer;
    rgvarg: Variant$VariantArg$ByReference;
    getArgs(): Variant$VARIANT[];
    getRgdispidNamedArgs(): OaIdl$DISPID[];
    setArgs(arg0: Variant$VARIANT[]): void;
    setRgdispidNamedArgs(arg0: OaIdl$DISPID[]): void;
}