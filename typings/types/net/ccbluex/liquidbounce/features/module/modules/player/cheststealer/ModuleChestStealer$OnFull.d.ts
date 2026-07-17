import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class ModuleChestStealer$OnFull extends Enum<ModuleChestStealer$OnFull> implements Tagged {
    static Companion: Tagged$Companion;
    static NONE: ModuleChestStealer$OnFull;
    static THROW: ModuleChestStealer$OnFull;
    static getEntries(): ModuleChestStealer$OnFull[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): ModuleChestStealer$OnFull;
    static values(): ModuleChestStealer$OnFull[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "NONE" | "THROW";
}