import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class TickerMode extends Enum<TickerMode> {
    static FIXED_DELAY: TickerMode;
    static FIXED_PERIOD: TickerMode;
    static getEntries(): TickerMode[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): TickerMode;
    static values(): TickerMode[];
    private constructor()
    name(): "FIXED_PERIOD" | "FIXED_DELAY";
}