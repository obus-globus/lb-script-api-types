import type { Class } from '../../../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class NoSlowSneakingSwitch$TimingMode extends Enum<NoSlowSneakingSwitch$TimingMode> implements Tagged {
    static Companion: Tagged$Companion;
    static POST_TICK: NoSlowSneakingSwitch$TimingMode;
    static PRE_POST: NoSlowSneakingSwitch$TimingMode;
    static PRE_TICK: NoSlowSneakingSwitch$TimingMode;
    static getEntries(): NoSlowSneakingSwitch$TimingMode[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): NoSlowSneakingSwitch$TimingMode;
    static values(): NoSlowSneakingSwitch$TimingMode[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "PRE_POST" | "PRE_TICK" | "POST_TICK";
}