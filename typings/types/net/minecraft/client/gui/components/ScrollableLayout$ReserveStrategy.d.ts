import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class ScrollableLayout$ReserveStrategy extends Enum<ScrollableLayout$ReserveStrategy> {
    static BOTH: ScrollableLayout$ReserveStrategy;
    static RIGHT: ScrollableLayout$ReserveStrategy;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): ScrollableLayout$ReserveStrategy;
    static values(): (Object | null)[];
    private constructor()
    name(): "RIGHT" | "BOTH";
}