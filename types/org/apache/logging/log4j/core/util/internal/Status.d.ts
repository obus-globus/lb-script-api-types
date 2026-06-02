import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class Status extends Enum<Status> {
    static EMPTY: Status;
    static ERROR: Status;
    static NOT_FOUND: Status;
    static NOT_MODIFIED: Status;
    static SUCCESS: Status;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): Status;
    static values(): (Object | null)[];
    private constructor()
    name(): "SUCCESS" | "NOT_MODIFIED" | "NOT_FOUND" | "ERROR" | "EMPTY";
}