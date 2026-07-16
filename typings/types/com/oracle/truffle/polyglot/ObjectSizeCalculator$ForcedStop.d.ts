import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class ObjectSizeCalculator$ForcedStop extends Enum<ObjectSizeCalculator$ForcedStop> {
    static CANCELLATION: ObjectSizeCalculator$ForcedStop;
    static NONE: ObjectSizeCalculator$ForcedStop;
    static STOPATBYTES: ObjectSizeCalculator$ForcedStop;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): ObjectSizeCalculator$ForcedStop;
    static values(): ObjectSizeCalculator$ForcedStop[];
    private constructor()
    name(): "NONE" | "STOPATBYTES" | "CANCELLATION";
}