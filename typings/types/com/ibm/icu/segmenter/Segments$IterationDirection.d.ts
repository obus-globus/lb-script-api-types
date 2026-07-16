import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class Segments$IterationDirection extends Enum<Segments$IterationDirection> {
    static BACKWARDS: Segments$IterationDirection;
    static FORWARDS: Segments$IterationDirection;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): Segments$IterationDirection;
    static values(): Segments$IterationDirection[];
    private constructor()
    name(): "FORWARDS" | "BACKWARDS";
}