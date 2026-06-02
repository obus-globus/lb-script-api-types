import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class FeedbackArcSetPolicy extends Enum<FeedbackArcSetPolicy> {
    static MIN_SIZE: FeedbackArcSetPolicy;
    static MIN_WEIGHT: FeedbackArcSetPolicy;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): FeedbackArcSetPolicy;
    static values(): (Object | null)[];
    private constructor()
    name(): "MIN_SIZE" | "MIN_WEIGHT";
}