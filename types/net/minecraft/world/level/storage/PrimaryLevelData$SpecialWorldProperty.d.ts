import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class PrimaryLevelData$SpecialWorldProperty extends Enum<PrimaryLevelData$SpecialWorldProperty> {
    static DEBUG: PrimaryLevelData$SpecialWorldProperty;
    static FLAT: PrimaryLevelData$SpecialWorldProperty;
    static NONE: PrimaryLevelData$SpecialWorldProperty;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): PrimaryLevelData$SpecialWorldProperty;
    static values(): (Object | null)[];
    private constructor()
    name(): "NONE" | "FLAT" | "DEBUG";
}