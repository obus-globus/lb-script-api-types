import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class FCDIterCollationIterator$State extends Enum<FCDIterCollationIterator$State> {
    static IN_NORM_ITER_AT_LIMIT: FCDIterCollationIterator$State;
    static IN_NORM_ITER_AT_START: FCDIterCollationIterator$State;
    static ITER_CHECK_BWD: FCDIterCollationIterator$State;
    static ITER_CHECK_FWD: FCDIterCollationIterator$State;
    static ITER_IN_FCD_SEGMENT: FCDIterCollationIterator$State;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): FCDIterCollationIterator$State;
    static values(): FCDIterCollationIterator$State[];
    private constructor()
    name(): "ITER_CHECK_FWD" | "ITER_CHECK_BWD" | "ITER_IN_FCD_SEGMENT" | "IN_NORM_ITER_AT_LIMIT" | "IN_NORM_ITER_AT_START";
}