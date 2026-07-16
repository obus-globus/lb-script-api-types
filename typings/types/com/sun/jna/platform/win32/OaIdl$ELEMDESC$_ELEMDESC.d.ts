import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../com/sun/jna/Structure.d.ts'
import type { Union } from '../../../../../com/sun/jna/Union.d.ts'
import type { OaIdl$IDLDESC } from '../../../../../com/sun/jna/platform/win32/OaIdl$IDLDESC.d.ts'
import type { OaIdl$PARAMDESC } from '../../../../../com/sun/jna/platform/win32/OaIdl$PARAMDESC.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
export class OaIdl$ELEMDESC$_ELEMDESC extends Union {
    static ALIGN_DEFAULT: number;
    static ALIGN_GNUC: number;
    static ALIGN_MSVC: number;
    static ALIGN_NONE: number;
    static autoRead(paramarg0: Structure[]): void;
    static autoWrite(paramarg0: Structure[]): void;
    static createFieldsOrder(paramarg0: string): string[];
    static createFieldsOrder(...paramarg0: string[]): string[];
    static createFieldsOrder(paramarg0: string[], ...paramarg1: string[]): string[];
    static createFieldsOrder(paramarg0: string[], paramarg1: string[]): string[];
    static newInstance(paramarg0: Class<Structure>): Structure | null;
    static newInstance(paramarg0: Class<Structure>, paramarg1: Pointer): Structure | null;
    constructor()
    constructor(arg0: Pointer)
    constructor(arg0: OaIdl$IDLDESC)
    constructor(arg0: OaIdl$PARAMDESC)
    idldesc: OaIdl$IDLDESC;
    paramdesc: OaIdl$PARAMDESC;
}