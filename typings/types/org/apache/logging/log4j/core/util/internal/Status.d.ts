import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class Status extends Enum<Status> {
    static EMPTY: Status;
    static ERROR: Status;
    static NOT_FOUND: Status;
    static NOT_MODIFIED: Status;
    static SUCCESS: Status;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): Status;
    static values(): Status[];
    private constructor()
    name(): "SUCCESS" | "NOT_MODIFIED" | "NOT_FOUND" | "ERROR" | "EMPTY";
}