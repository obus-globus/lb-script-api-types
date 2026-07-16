import type { Class } from '../../java/lang/Class.d.ts'
import type { Enum } from '../../java/lang/Enum.d.ts'
export class ObjectInputFilter$Status extends Enum<ObjectInputFilter$Status> {
    static ALLOWED: ObjectInputFilter$Status;
    static REJECTED: ObjectInputFilter$Status;
    static UNDECIDED: ObjectInputFilter$Status;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ObjectInputFilter$Status;
    static values(): ObjectInputFilter$Status[];
    private constructor()
    name(): "UNDECIDED" | "ALLOWED" | "REJECTED";
}