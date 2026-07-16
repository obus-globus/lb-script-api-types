import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class GenderInfo$ListGenderStyle extends Enum<GenderInfo$ListGenderStyle> {
    static MALE_TAINTS: GenderInfo$ListGenderStyle;
    static MIXED_NEUTRAL: GenderInfo$ListGenderStyle;
    static NEUTRAL: GenderInfo$ListGenderStyle;
    static fromName(paramname: string): GenderInfo$ListGenderStyle;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): GenderInfo$ListGenderStyle;
    static values(): GenderInfo$ListGenderStyle[];
    private constructor()
    name(): "NEUTRAL" | "MIXED_NEUTRAL" | "MALE_TAINTS";
}