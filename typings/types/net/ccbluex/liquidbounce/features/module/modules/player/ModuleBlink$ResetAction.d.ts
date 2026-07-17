import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class ModuleBlink$ResetAction extends Enum<ModuleBlink$ResetAction> implements Tagged {
    static BLINK: ModuleBlink$ResetAction;
    static Companion: Tagged$Companion;
    static RESET: ModuleBlink$ResetAction;
    static getEntries(): ModuleBlink$ResetAction[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): ModuleBlink$ResetAction;
    static values(): ModuleBlink$ResetAction[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "RESET" | "BLINK";
}