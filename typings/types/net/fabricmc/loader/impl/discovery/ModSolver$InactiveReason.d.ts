import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class ModSolver$InactiveReason extends Enum<ModSolver$InactiveReason> {
    static INACTIVE_PARENT: ModSolver$InactiveReason;
    static INCOMPATIBLE: ModSolver$InactiveReason;
    static NEWER_ACTIVE: ModSolver$InactiveReason;
    static SAME_ACTIVE: ModSolver$InactiveReason;
    static TO_REMOVE: ModSolver$InactiveReason;
    static TO_REPLACE: ModSolver$InactiveReason;
    static UNKNOWN: ModSolver$InactiveReason;
    static WRONG_ENVIRONMENT: ModSolver$InactiveReason;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ModSolver$InactiveReason;
    static values(): ModSolver$InactiveReason[];
    private constructor(arg2: string)
    // private id: string;
    name(): "INACTIVE_PARENT" | "INCOMPATIBLE" | "NEWER_ACTIVE" | "SAME_ACTIVE" | "TO_REMOVE" | "TO_REPLACE" | "UNKNOWN" | "WRONG_ENVIRONMENT";
}