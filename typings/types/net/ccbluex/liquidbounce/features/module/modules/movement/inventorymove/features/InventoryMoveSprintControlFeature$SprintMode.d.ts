import type { Class } from '../../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class InventoryMoveSprintControlFeature$SprintMode extends Enum<InventoryMoveSprintControlFeature$SprintMode> implements Tagged {
    static Companion: Tagged$Companion;
    static DO_NOT_CHANGE: InventoryMoveSprintControlFeature$SprintMode;
    static FORCE_NO_SPRINT: InventoryMoveSprintControlFeature$SprintMode;
    static FORCE_SPRINT: InventoryMoveSprintControlFeature$SprintMode;
    static getEntries(): InventoryMoveSprintControlFeature$SprintMode[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): InventoryMoveSprintControlFeature$SprintMode;
    static values(): InventoryMoveSprintControlFeature$SprintMode[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "DO_NOT_CHANGE" | "FORCE_SPRINT" | "FORCE_NO_SPRINT";
}