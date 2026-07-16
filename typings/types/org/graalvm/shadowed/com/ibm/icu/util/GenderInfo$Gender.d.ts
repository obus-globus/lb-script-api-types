import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class GenderInfo$Gender extends Enum<GenderInfo$Gender> {
    static FEMALE: GenderInfo$Gender;
    static MALE: GenderInfo$Gender;
    static OTHER: GenderInfo$Gender;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): GenderInfo$Gender;
    static values(): GenderInfo$Gender[];
    private constructor()
    name(): "MALE" | "FEMALE" | "OTHER";
}