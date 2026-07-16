import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class Interval$Bounded extends Enum<Interval$Bounded> {
    static CLOSED: Interval$Bounded;
    static CLOSED_LEFT: Interval$Bounded;
    static CLOSED_RIGHT: Interval$Bounded;
    static OPEN: Interval$Bounded;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): Interval$Bounded;
    static values(): Interval$Bounded[];
    private constructor()
    name(): "OPEN" | "CLOSED" | "CLOSED_RIGHT" | "CLOSED_LEFT";
}