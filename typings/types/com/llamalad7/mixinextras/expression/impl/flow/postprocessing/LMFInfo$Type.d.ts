import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class LMFInfo$Type extends Enum<LMFInfo$Type> {
    static BOUND_METHOD: LMFInfo$Type;
    static FREE_METHOD: LMFInfo$Type;
    static INSTANTIATION: LMFInfo$Type;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): LMFInfo$Type;
    static values(): (Object | null)[];
    private constructor()
    name(): "FREE_METHOD" | "BOUND_METHOD" | "INSTANTIATION";
}