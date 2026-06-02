import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class RotationType extends Enum<RotationType> {
    static HACKY_POST_1_21_6: RotationType;
    static HACKY_PRE_1_21_6: RotationType;
    static POST_1_21_6: RotationType;
    static PRE_1_21_6: RotationType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): RotationType;
    static values(): (Object | null)[];
    private constructor()
    name(): "PRE_1_21_6" | "HACKY_PRE_1_21_6" | "POST_1_21_6" | "HACKY_POST_1_21_6";
}