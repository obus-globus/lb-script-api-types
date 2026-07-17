import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class ModuleSprint$StopOn extends Enum<ModuleSprint$StopOn> implements Tagged {
    static AIR: ModuleSprint$StopOn;
    static Companion: Tagged$Companion;
    static GROUND: ModuleSprint$StopOn;
    static SNEAKING: ModuleSprint$StopOn;
    static USING_ITEM: ModuleSprint$StopOn;
    static getEntries(): ModuleSprint$StopOn[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): ModuleSprint$StopOn;
    static values(): ModuleSprint$StopOn[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "GROUND" | "AIR" | "SNEAKING" | "USING_ITEM";
}