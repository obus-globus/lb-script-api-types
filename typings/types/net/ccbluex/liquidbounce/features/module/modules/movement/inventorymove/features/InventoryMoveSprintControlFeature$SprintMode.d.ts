import type { Class } from '../../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class InventoryMoveSprintControlFeature$SprintMode extends Enum<InventoryMoveSprintControlFeature$SprintMode> implements Tagged {
    static Companion: Tagged$Companion;
    /**
     * This can be used to not change the sprint state.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/inventorymove/features/InventoryMoveSprintControlFeature.kt#L36 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/inventorymove/features/InventoryMoveSprintControlFeature.kt:36}
     */
    static DO_NOT_CHANGE: InventoryMoveSprintControlFeature$SprintMode;
    /**
     * This can be used to disable sprinting on Scaffold,
     * while still allowing to sprint omnidirectional
     * when Scaffold is not active.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/inventorymove/features/InventoryMoveSprintControlFeature.kt#L48 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/inventorymove/features/InventoryMoveSprintControlFeature.kt:48}
     */
    static FORCE_NO_SPRINT: InventoryMoveSprintControlFeature$SprintMode;
    /**
     * This can be used to force sprinting on Scaffold,
     * while not allowing to sprint omnidirectional
     * when Scaffold is not active.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/inventorymove/features/InventoryMoveSprintControlFeature.kt#L41 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/inventorymove/features/InventoryMoveSprintControlFeature.kt:41}
     */
    static FORCE_SPRINT: InventoryMoveSprintControlFeature$SprintMode;
    static getEntries(): InventoryMoveSprintControlFeature$SprintMode[];
    static makeLookupTable(paramarg0: (Tagged | null)[]): { [key: string]: Tagged | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): InventoryMoveSprintControlFeature$SprintMode;
    static values(): (Object | null)[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "DO_NOT_CHANGE" | "FORCE_SPRINT" | "FORCE_NO_SPRINT";
}