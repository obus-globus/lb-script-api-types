import type { Class } from '../../../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class NoSlowConsumeIntave14$Mode extends Enum<NoSlowConsumeIntave14$Mode> implements Tagged {
    static Companion: Tagged$Companion;
    static NEW: NoSlowConsumeIntave14$Mode;
    static RELEASE: NoSlowConsumeIntave14$Mode;
    static getEntries(): NoSlowConsumeIntave14$Mode[];
    static makeLookupTable(paramarg0: (Tagged | null)[]): { [key: string]: Tagged | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): NoSlowConsumeIntave14$Mode;
    static values(): NoSlowConsumeIntave14$Mode[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "RELEASE" | "NEW";
}