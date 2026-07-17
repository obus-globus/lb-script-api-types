import type { Class } from '../../../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class NoSlowBlockingSwitch$TimingMode extends Enum<NoSlowBlockingSwitch$TimingMode> implements Tagged {
    static Companion: Tagged$Companion;
    static POST_TICK: NoSlowBlockingSwitch$TimingMode;
    static PRE_POST: NoSlowBlockingSwitch$TimingMode;
    static PRE_TICK: NoSlowBlockingSwitch$TimingMode;
    static getEntries(): NoSlowBlockingSwitch$TimingMode[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): NoSlowBlockingSwitch$TimingMode;
    static values(): NoSlowBlockingSwitch$TimingMode[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "PRE_POST" | "PRE_TICK" | "POST_TICK";
}