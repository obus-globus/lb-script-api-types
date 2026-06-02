import type { Class } from '../../java/lang/Class.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Enum } from '../../java/lang/Enum.d.ts'
export class ObjectInputFilter$Status extends Enum<ObjectInputFilter$Status> {
    static ALLOWED: ObjectInputFilter$Status;
    static REJECTED: ObjectInputFilter$Status;
    static UNDECIDED: ObjectInputFilter$Status;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ObjectInputFilter$Status;
    static values(): (Object | null)[];
    private constructor()
    name(): "UNDECIDED" | "ALLOWED" | "REJECTED";
}