import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class ResolutionContext$LimitBehavior extends Enum<ResolutionContext$LimitBehavior> {
    static DISCARD_REMAINING: ResolutionContext$LimitBehavior;
    static STOP_PROCESSING_AND_COPY_REMAINING: ResolutionContext$LimitBehavior;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): ResolutionContext$LimitBehavior;
    static values(): ResolutionContext$LimitBehavior[];
    private constructor()
    name(): "DISCARD_REMAINING" | "STOP_PROCESSING_AND_COPY_REMAINING";
}