import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { ClickAction } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/misc/ClickAction.d.ts'
export class ClickMode extends Enum<ClickMode> implements Tagged {
    static Companion: Tagged$Companion;
    static QUICK_MOVE: ClickMode;
    static getEntries(): ClickMode[];
    static makeLookupTable(paramarg0: (Object | null)[]): { [key: string]: Object | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ClickMode;
    static values(): (Object | null)[];
    private constructor(tag: string, action: ClickAction)
    readonly action: ClickAction;
    readonly tag: string;
    name(): "QUICK_MOVE";
}