import type { Class } from '../../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class InventoryMoveSneakControlFeature$SneakMode extends Enum<InventoryMoveSneakControlFeature$SneakMode> implements Tagged {
    static Companion: Tagged$Companion;
    /**
     * This can be used to not change the sprint state.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/inventorymove/features/InventoryMoveSneakControlFeature.kt#L35 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/inventorymove/features/InventoryMoveSneakControlFeature.kt:35}
     */
    static DO_NOT_CHANGE: InventoryMoveSneakControlFeature$SneakMode;
    /**
     * This can be used to disable sneaking on Scaffold,
     * while still allowing to sprint omnidirectional
     * when Scaffold is not active.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/inventorymove/features/InventoryMoveSneakControlFeature.kt#L47 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/inventorymove/features/InventoryMoveSneakControlFeature.kt:47}
     */
    static FORCE_NO_SNEAK: InventoryMoveSneakControlFeature$SneakMode;
    /**
     * This can be used to force sneaking on Scaffold,
     * while not allowing to sprint omnidirectional
     * when Scaffold is not active.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/inventorymove/features/InventoryMoveSneakControlFeature.kt#L40 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/inventorymove/features/InventoryMoveSneakControlFeature.kt:40}
     */
    static FORCE_SNEAK: InventoryMoveSneakControlFeature$SneakMode;
    static getEntries(): InventoryMoveSneakControlFeature$SneakMode[];
    static makeLookupTable(paramarg0: (Tagged | null)[]): { [key: string]: Tagged | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): InventoryMoveSneakControlFeature$SneakMode;
    static values(): (Object | null)[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "DO_NOT_CHANGE" | "FORCE_SNEAK" | "FORCE_NO_SNEAK";
}