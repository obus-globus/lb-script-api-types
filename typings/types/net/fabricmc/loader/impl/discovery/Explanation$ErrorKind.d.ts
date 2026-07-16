import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class Explanation$ErrorKind extends Enum<Explanation$ErrorKind> {
    static HARD_DEP: Explanation$ErrorKind;
    static HARD_DEP_INCOMPATIBLE_PRESELECTED: Explanation$ErrorKind;
    static HARD_DEP_NO_CANDIDATE: Explanation$ErrorKind;
    static NEG_HARD_DEP: Explanation$ErrorKind;
    static NESTED_FORCELOAD: Explanation$ErrorKind;
    static NESTED_REQ_PARENT: Explanation$ErrorKind;
    static PRESELECT_FORCELOAD: Explanation$ErrorKind;
    static PRESELECT_HARD_DEP: Explanation$ErrorKind;
    static PRESELECT_NEG_HARD_DEP: Explanation$ErrorKind;
    static PRESELECT_SOFT_DEP: Explanation$ErrorKind;
    static ROOT_FORCELOAD: Explanation$ErrorKind;
    static ROOT_FORCELOAD_SINGLE: Explanation$ErrorKind;
    static SOFT_DEP: Explanation$ErrorKind;
    static UNIQUE_ID: Explanation$ErrorKind;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Explanation$ErrorKind;
    static values(): Explanation$ErrorKind[];
    private constructor(arg2: boolean)
    // private isDependencyError: boolean;
    name(): "PRESELECT_HARD_DEP" | "PRESELECT_SOFT_DEP" | "PRESELECT_NEG_HARD_DEP" | "PRESELECT_FORCELOAD" | "HARD_DEP_INCOMPATIBLE_PRESELECTED" | "HARD_DEP_NO_CANDIDATE" | "HARD_DEP" | "SOFT_DEP" | "NEG_HARD_DEP" | "NESTED_FORCELOAD" | "NESTED_REQ_PARENT" | "ROOT_FORCELOAD_SINGLE" | "ROOT_FORCELOAD" | "UNIQUE_ID";
}