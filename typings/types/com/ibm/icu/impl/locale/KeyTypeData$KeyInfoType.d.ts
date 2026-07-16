import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class KeyTypeData$KeyInfoType extends Enum<KeyTypeData$KeyInfoType> {
    static deprecated: KeyTypeData$KeyInfoType;
    static valueType: KeyTypeData$KeyInfoType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): KeyTypeData$KeyInfoType;
    static values(): KeyTypeData$KeyInfoType[];
    private constructor()
    name(): "deprecated" | "valueType";
}