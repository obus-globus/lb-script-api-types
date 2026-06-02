import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { Union } from '../../../../../com/sun/jna/Union.d.ts'
import type { OaIdl$DECIMAL$_DECIMAL1$_DECIMAL1_DECIMAL } from '../../../../../com/sun/jna/platform/win32/OaIdl$DECIMAL$_DECIMAL1$_DECIMAL1_DECIMAL.d.ts'
import type { WinDef$USHORT } from '../../../../../com/sun/jna/platform/win32/WinDef$USHORT.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class OaIdl$DECIMAL$_DECIMAL1 extends Union {
    static ALIGN_DEFAULT: number;
    static ALIGN_GNUC: number;
    static ALIGN_MSVC: number;
    static ALIGN_NONE: number;
    static autoRead(paramarg0: (Object | null)[]): void;
    static autoWrite(paramarg0: (Object | null)[]): void;
    static createFieldsOrder(paramarg0: string): string[];
    static createFieldsOrder(paramarg0: (Object | null)[]): string[];
    static createFieldsOrder(paramarg0: string[], paramarg1: (Object | null)[]): string[];
    static createFieldsOrder(paramarg0: string[], paramarg1: string[]): string[];
    static newInstance(paramarg0: Class<Object>): Object | null;
    static newInstance(paramarg0: Class<Object>, paramarg1: Pointer): Object | null;
    constructor()
    constructor(arg0: Pointer)
    decimal1_DECIMAL: OaIdl$DECIMAL$_DECIMAL1$_DECIMAL1_DECIMAL;
    signscale: WinDef$USHORT;
}