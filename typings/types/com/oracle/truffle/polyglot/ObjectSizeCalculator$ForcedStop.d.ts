import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class ObjectSizeCalculator$ForcedStop extends Enum<ObjectSizeCalculator$ForcedStop> {
    static CANCELLATION: ObjectSizeCalculator$ForcedStop;
    static NONE: ObjectSizeCalculator$ForcedStop;
    static STOPATBYTES: ObjectSizeCalculator$ForcedStop;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): ObjectSizeCalculator$ForcedStop;
    static values(): ObjectSizeCalculator$ForcedStop[];
    private constructor()
    name(): "NONE" | "STOPATBYTES" | "CANCELLATION";
}