import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class ScaleLayer$Type extends Enum<ScaleLayer$Type> {
    static FUZZY: ScaleLayer$Type;
    static NORMAL: ScaleLayer$Type;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ScaleLayer$Type;
    static values(): (Object | null)[];
    private constructor()
    name(): "NORMAL" | "FUZZY";
}