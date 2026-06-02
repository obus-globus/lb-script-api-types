import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class GenderInfo$Gender extends Enum<GenderInfo$Gender> {
    static FEMALE: GenderInfo$Gender;
    static MALE: GenderInfo$Gender;
    static OTHER: GenderInfo$Gender;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): GenderInfo$Gender;
    static values(): (Object | null)[];
    private constructor()
    name(): "MALE" | "FEMALE" | "OTHER";
}