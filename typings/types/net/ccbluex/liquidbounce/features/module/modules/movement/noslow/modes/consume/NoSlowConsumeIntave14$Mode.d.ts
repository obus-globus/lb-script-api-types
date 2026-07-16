import type { Class } from '../../../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class NoSlowConsumeIntave14$Mode extends Enum<NoSlowConsumeIntave14$Mode> implements Tagged {
    static Companion: Tagged$Companion;
    static NEW: NoSlowConsumeIntave14$Mode;
    static RELEASE: NoSlowConsumeIntave14$Mode;
    static getEntries(): NoSlowConsumeIntave14$Mode[];
    static makeLookupTable<T extends Tagged>(self: T[]): { [key: string]: T };
    static of(self: string): Tagged;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): NoSlowConsumeIntave14$Mode;
    static values(): NoSlowConsumeIntave14$Mode[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "RELEASE" | "NEW";
}