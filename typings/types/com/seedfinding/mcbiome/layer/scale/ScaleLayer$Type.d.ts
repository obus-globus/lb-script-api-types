import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class ScaleLayer$Type extends Enum<ScaleLayer$Type> {
    static FUZZY: ScaleLayer$Type;
    static NORMAL: ScaleLayer$Type;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ScaleLayer$Type;
    static values(): ScaleLayer$Type[];
    private constructor()
    name(): "NORMAL" | "FUZZY";
}