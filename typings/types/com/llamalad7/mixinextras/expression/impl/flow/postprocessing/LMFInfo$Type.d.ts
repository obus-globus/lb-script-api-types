import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class LMFInfo$Type extends Enum<LMFInfo$Type> {
    static BOUND_METHOD: LMFInfo$Type;
    static FREE_METHOD: LMFInfo$Type;
    static INSTANTIATION: LMFInfo$Type;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): LMFInfo$Type;
    static values(): LMFInfo$Type[];
    private constructor()
    name(): "FREE_METHOD" | "BOUND_METHOD" | "INSTANTIATION";
}