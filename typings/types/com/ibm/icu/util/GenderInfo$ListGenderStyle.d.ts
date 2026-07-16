import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class GenderInfo$ListGenderStyle extends Enum<GenderInfo$ListGenderStyle> {
    static MALE_TAINTS: GenderInfo$ListGenderStyle;
    static MIXED_NEUTRAL: GenderInfo$ListGenderStyle;
    static NEUTRAL: GenderInfo$ListGenderStyle;
    static fromName(paramarg0: string): GenderInfo$ListGenderStyle;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): GenderInfo$ListGenderStyle;
    static values(): GenderInfo$ListGenderStyle[];
    private constructor()
    name(): "NEUTRAL" | "MIXED_NEUTRAL" | "MALE_TAINTS";
}