import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
import type { KeyTypeData$SpecialTypeHandler } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/locale/KeyTypeData$SpecialTypeHandler.d.ts'
export class KeyTypeData$SpecialType extends Enum<KeyTypeData$SpecialType> {
    static CODEPOINTS: KeyTypeData$SpecialType;
    static PRIVATE_USE: KeyTypeData$SpecialType;
    static REORDER_CODE: KeyTypeData$SpecialType;
    static RG_KEY_VALUE: KeyTypeData$SpecialType;
    static SCRIPT_CODE: KeyTypeData$SpecialType;
    static SUBDIVISION_CODE: KeyTypeData$SpecialType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): KeyTypeData$SpecialType;
    static values(): KeyTypeData$SpecialType[];
    private constructor(handler: KeyTypeData$SpecialTypeHandler)
    // private handler: KeyTypeData$SpecialTypeHandler;
    name(): "CODEPOINTS" | "REORDER_CODE" | "RG_KEY_VALUE" | "SCRIPT_CODE" | "SUBDIVISION_CODE" | "PRIVATE_USE";
}