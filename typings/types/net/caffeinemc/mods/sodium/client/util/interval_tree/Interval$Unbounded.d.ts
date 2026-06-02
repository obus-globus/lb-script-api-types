import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class Interval$Unbounded extends Enum<Interval$Unbounded> {
    static CLOSED_LEFT: Interval$Unbounded;
    static CLOSED_RIGHT: Interval$Unbounded;
    static OPEN_LEFT: Interval$Unbounded;
    static OPEN_RIGHT: Interval$Unbounded;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Interval$Unbounded;
    static values(): (Object | null)[];
    private constructor()
    name(): "OPEN_LEFT" | "CLOSED_LEFT" | "OPEN_RIGHT" | "CLOSED_RIGHT";
}