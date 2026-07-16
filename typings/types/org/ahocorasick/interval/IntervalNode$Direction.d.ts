import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class IntervalNode$Direction extends Enum<IntervalNode$Direction> {
    static LEFT: IntervalNode$Direction;
    static RIGHT: IntervalNode$Direction;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): IntervalNode$Direction;
    static values(): IntervalNode$Direction[];
    private constructor()
    name(): "LEFT" | "RIGHT";
}