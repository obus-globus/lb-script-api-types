import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class TickerMode extends Enum<TickerMode> {
    static FIXED_DELAY: TickerMode;
    static FIXED_PERIOD: TickerMode;
    static getEntries(): TickerMode[];
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): TickerMode;
    static values(): TickerMode[];
    private constructor()
    name(): "FIXED_PERIOD" | "FIXED_DELAY";
}