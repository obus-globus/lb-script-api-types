import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class ScrollableLayout$ReserveStrategy extends Enum<ScrollableLayout$ReserveStrategy> {
    static BOTH: ScrollableLayout$ReserveStrategy;
    static RIGHT: ScrollableLayout$ReserveStrategy;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): ScrollableLayout$ReserveStrategy;
    static values(): ScrollableLayout$ReserveStrategy[];
    private constructor()
    name(): "RIGHT" | "BOTH";
}