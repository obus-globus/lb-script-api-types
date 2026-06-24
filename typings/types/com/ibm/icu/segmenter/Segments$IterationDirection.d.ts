import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class Segments$IterationDirection extends Enum<Segments$IterationDirection> {
    static BACKWARDS: Segments$IterationDirection;
    static FORWARDS: Segments$IterationDirection;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Segments$IterationDirection;
    static values(): (Object | null)[];
    private constructor()
    name(): "FORWARDS" | "BACKWARDS";
}