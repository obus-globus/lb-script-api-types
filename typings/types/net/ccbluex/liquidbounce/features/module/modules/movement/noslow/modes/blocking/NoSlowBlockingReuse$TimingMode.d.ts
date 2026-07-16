import type { Class } from '../../../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class NoSlowBlockingReuse$TimingMode extends Enum<NoSlowBlockingReuse$TimingMode> implements Tagged {
    static Companion: Tagged$Companion;
    static POST_TICK: NoSlowBlockingReuse$TimingMode;
    static PRE_POST: NoSlowBlockingReuse$TimingMode;
    static PRE_TICK: NoSlowBlockingReuse$TimingMode;
    static getEntries(): NoSlowBlockingReuse$TimingMode[];
    static makeLookupTable<T extends Tagged>(self: T[]): { [key: string]: T };
    static of(self: string): Tagged;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): NoSlowBlockingReuse$TimingMode;
    static values(): NoSlowBlockingReuse$TimingMode[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "PRE_POST" | "PRE_TICK" | "POST_TICK";
}