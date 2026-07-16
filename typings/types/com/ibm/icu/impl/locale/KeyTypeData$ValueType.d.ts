import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class KeyTypeData$ValueType extends Enum<KeyTypeData$ValueType> {
    static any: KeyTypeData$ValueType;
    static incremental: KeyTypeData$ValueType;
    static multiple: KeyTypeData$ValueType;
    static single: KeyTypeData$ValueType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): KeyTypeData$ValueType;
    static values(): KeyTypeData$ValueType[];
    private constructor()
    name(): "single" | "multiple" | "incremental" | "any";
}