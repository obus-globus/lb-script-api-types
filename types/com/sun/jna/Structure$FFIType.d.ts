import type { Pointer } from '../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../com/sun/jna/Structure.d.ts'
import type { Structure$FFIType$size_t } from '../../../com/sun/jna/Structure$FFIType$size_t.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Structure$FFIType extends Structure {
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
    constructor(arg0: Structure)
    constructor(arg0: Structure$FFIType)
    constructor(arg0: Object, arg1: Class<Object>)
    alignment: number;
    elements: Pointer;
    size: Structure$FFIType$size_t;
    type: number;
    // private init(arg0: Pointer[]): void;
}