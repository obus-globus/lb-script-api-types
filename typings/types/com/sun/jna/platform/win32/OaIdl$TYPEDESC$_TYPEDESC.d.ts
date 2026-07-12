import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../com/sun/jna/Structure.d.ts'
import type { Union } from '../../../../../com/sun/jna/Union.d.ts'
import type { OaIdl$ARRAYDESC$ByReference } from '../../../../../com/sun/jna/platform/win32/OaIdl$ARRAYDESC$ByReference.d.ts'
import type { OaIdl$HREFTYPE } from '../../../../../com/sun/jna/platform/win32/OaIdl$HREFTYPE.d.ts'
import type { OaIdl$TYPEDESC$ByReference } from '../../../../../com/sun/jna/platform/win32/OaIdl$TYPEDESC$ByReference.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class OaIdl$TYPEDESC$_TYPEDESC extends Union {
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
    hreftype: OaIdl$HREFTYPE;
    lpadesc: OaIdl$ARRAYDESC$ByReference;
    lptdesc: OaIdl$TYPEDESC$ByReference;
    getHreftype(): OaIdl$HREFTYPE;
    getLpadesc(): OaIdl$ARRAYDESC$ByReference;
    getLptdesc(): OaIdl$TYPEDESC$ByReference;
}