import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class WarmUpTracker$Mode extends Enum<WarmUpTracker$Mode> {
    static CONSTANT: WarmUpTracker$Mode;
    static LINEAR: WarmUpTracker$Mode;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): WarmUpTracker$Mode;
    static values(): WarmUpTracker$Mode[];
    private constructor()
    name(): "LINEAR" | "CONSTANT";
}