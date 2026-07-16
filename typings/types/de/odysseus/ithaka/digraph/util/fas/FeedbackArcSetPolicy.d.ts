import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class FeedbackArcSetPolicy extends Enum<FeedbackArcSetPolicy> {
    static MIN_SIZE: FeedbackArcSetPolicy;
    static MIN_WEIGHT: FeedbackArcSetPolicy;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): FeedbackArcSetPolicy;
    static values(): FeedbackArcSetPolicy[];
    private constructor()
    name(): "MIN_SIZE" | "MIN_WEIGHT";
}