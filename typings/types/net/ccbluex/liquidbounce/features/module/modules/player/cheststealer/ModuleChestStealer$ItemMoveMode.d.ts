import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class ModuleChestStealer$ItemMoveMode extends Enum<ModuleChestStealer$ItemMoveMode> implements Tagged {
    static Companion: Tagged$Companion;
    static DRAG_AND_DROP: ModuleChestStealer$ItemMoveMode;
    static QUICK_MOVE: ModuleChestStealer$ItemMoveMode;
    static getEntries(): ModuleChestStealer$ItemMoveMode[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): ModuleChestStealer$ItemMoveMode;
    static values(): ModuleChestStealer$ItemMoveMode[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "QUICK_MOVE" | "DRAG_AND_DROP";
}