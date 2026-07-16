import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class PrimaryLevelData$SpecialWorldProperty extends Enum<PrimaryLevelData$SpecialWorldProperty> {
    static DEBUG: PrimaryLevelData$SpecialWorldProperty;
    static FLAT: PrimaryLevelData$SpecialWorldProperty;
    static NONE: PrimaryLevelData$SpecialWorldProperty;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): PrimaryLevelData$SpecialWorldProperty;
    static values(): PrimaryLevelData$SpecialWorldProperty[];
    private constructor()
    name(): "NONE" | "FLAT" | "DEBUG";
}