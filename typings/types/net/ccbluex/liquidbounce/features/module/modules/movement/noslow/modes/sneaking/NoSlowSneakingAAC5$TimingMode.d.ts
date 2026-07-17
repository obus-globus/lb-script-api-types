import type { Class } from '../../../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class NoSlowSneakingAAC5$TimingMode extends Enum<NoSlowSneakingAAC5$TimingMode> implements Tagged {
    static Companion: Tagged$Companion;
    static POST_TICK: NoSlowSneakingAAC5$TimingMode;
    static PRE_POST: NoSlowSneakingAAC5$TimingMode;
    static PRE_TICK: NoSlowSneakingAAC5$TimingMode;
    static getEntries(): NoSlowSneakingAAC5$TimingMode[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): NoSlowSneakingAAC5$TimingMode;
    static values(): NoSlowSneakingAAC5$TimingMode[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "PRE_POST" | "PRE_TICK" | "POST_TICK";
}