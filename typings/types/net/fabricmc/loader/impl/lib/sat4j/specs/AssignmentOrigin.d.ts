import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class AssignmentOrigin extends Enum<AssignmentOrigin> {
    static BLANK: string;
    static DECIDED: AssignmentOrigin;
    static DECIDED_CYCLE: AssignmentOrigin;
    static DECIDED_PROPAGATED: AssignmentOrigin;
    static DECIDED_PROPAGATED_LEARNED: AssignmentOrigin;
    static PROPAGATED_LEARNED: AssignmentOrigin;
    static PROPAGATED_ORIGINAL: AssignmentOrigin;
    static UNASSIGNED: AssignmentOrigin;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): AssignmentOrigin;
    static values(): AssignmentOrigin[];
    private constructor(arg2: string)
    // private color: string;
    name(): "UNASSIGNED" | "DECIDED" | "PROPAGATED_ORIGINAL" | "PROPAGATED_LEARNED" | "DECIDED_PROPAGATED" | "DECIDED_PROPAGATED_LEARNED" | "DECIDED_CYCLE";
}