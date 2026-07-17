import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class ModuleBetterInventory$CooldownProgressMode extends Enum<ModuleBetterInventory$CooldownProgressMode> implements Tagged {
    static Companion: Tagged$Companion;
    static DURATION_SECONDS: ModuleBetterInventory$CooldownProgressMode;
    static DURATION_TICKS: ModuleBetterInventory$CooldownProgressMode;
    static PERCENTAGE: ModuleBetterInventory$CooldownProgressMode;
    static getEntries(): ModuleBetterInventory$CooldownProgressMode[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): ModuleBetterInventory$CooldownProgressMode;
    static values(): ModuleBetterInventory$CooldownProgressMode[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "PERCENTAGE" | "DURATION_TICKS" | "DURATION_SECONDS";
}