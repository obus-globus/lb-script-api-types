import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class ResolutionContext$LimitBehavior extends Enum<ResolutionContext$LimitBehavior> {
    static DISCARD_REMAINING: ResolutionContext$LimitBehavior;
    static STOP_PROCESSING_AND_COPY_REMAINING: ResolutionContext$LimitBehavior;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): ResolutionContext$LimitBehavior;
    static values(): (Object | null)[];
    private constructor()
    name(): "DISCARD_REMAINING" | "STOP_PROCESSING_AND_COPY_REMAINING";
}