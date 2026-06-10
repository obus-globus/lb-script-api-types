import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../com/sun/jna/Structure.d.ts'
import type { Winevt$EVT_VARIANT$field1_union } from '../../../../../com/sun/jna/platform/win32/Winevt$EVT_VARIANT$field1_union.d.ts'
import type { Winevt$EVT_VARIANT_TYPE } from '../../../../../com/sun/jna/platform/win32/Winevt$EVT_VARIANT_TYPE.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Winevt$EVT_VARIANT extends Structure {
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
    static newInstance(paramarg0: Class<Structure>): Structure | null;
    static newInstance(paramarg0: Class<Structure>, paramarg1: Pointer): Structure | null;
    constructor()
    constructor(arg0: Pointer)
    Count: number;
    Type: number;
    field1: Winevt$EVT_VARIANT$field1_union;
    // private holder: Object;
    // private getBaseType(): number;
    getValue(): Object;
    getVariantType(): Winevt$EVT_VARIANT_TYPE;
    isArray(): boolean;
    setValue(arg0: Winevt$EVT_VARIANT_TYPE, arg1: Object): void;
    use(arg0: Pointer): void;
}