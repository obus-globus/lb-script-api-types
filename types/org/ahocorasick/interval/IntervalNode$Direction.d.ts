import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class IntervalNode$Direction extends Enum<IntervalNode$Direction> {
    static LEFT: IntervalNode$Direction;
    static RIGHT: IntervalNode$Direction;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): IntervalNode$Direction;
    static values(): (Object | null)[];
    private constructor()
    name(): "LEFT" | "RIGHT";
}