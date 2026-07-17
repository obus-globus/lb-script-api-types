import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { ClickAction } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/misc/ClickAction.d.ts'
export class ClickMode extends Enum<ClickMode> implements Tagged {
    static Companion: Tagged$Companion;
    static QUICK_MOVE: ClickMode;
    static getEntries(): ClickMode[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): ClickMode;
    static values(): ClickMode[];
    private constructor(tag: string, action: ClickAction)
    readonly action: ClickAction;
    readonly tag: string;
    name(): "QUICK_MOVE";
}