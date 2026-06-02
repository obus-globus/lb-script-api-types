import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure$ByReference } from '../../../../../com/sun/jna/Structure$ByReference.d.ts'
import type { WinRas$RASENTRY } from '../../../../../com/sun/jna/platform/win32/WinRas$RASENTRY.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class WinRas$RASENTRY$ByReference extends WinRas$RASENTRY implements Structure$ByReference {
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
}