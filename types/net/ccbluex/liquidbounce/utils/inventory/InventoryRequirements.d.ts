import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { InventoryAction } from '../../../../../net/ccbluex/liquidbounce/utils/inventory/InventoryAction.d.ts'
export class InventoryRequirements extends Enum<InventoryRequirements> implements Predicate<InventoryAction>, Tagged {
    static Companion: Tagged$Companion;
    static NOT_BREAKING: InventoryRequirements;
    static NOT_DURING_COMBAT: InventoryRequirements;
    static NOT_USING_ITEM: InventoryRequirements;
    static NO_MOVEMENT: InventoryRequirements;
    static NO_ROTATION: InventoryRequirements;
    /**
     * When this option is not enabled, the inventory will be opened silently
     * depending on the Minecraft version chosen using ViaFabricPlus.
     *
     * If the protocol contains {@link com.viaversion.viabackwards.protocol.v1_12to1_11_1.Protocol1_12To1_11_1}
     * and the client status packet is supported,
     * the inventory will be opened silently using {@link openInventorySilently}.
     * Otherwise, the inventory will not have any open tracking and
     * the server will only know when clicking in the inventory.
     *
     * Closing will still be required to be done for any version.
     * Sad.
     * :(
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/utils/inventory/InventoryValueGroups.kt#L106 | src/main/kotlin/net/ccbluex/liquidbounce/utils/inventory/InventoryValueGroups.kt:106}
     */
    static OPEN_INVENTORY: InventoryRequirements;
    static getEntries(): InventoryRequirements[];
    static isEqual(paramarg0: Object): (param0: Object | null) => kotlin.Boolean;
    static makeLookupTable(paramarg0: (Object | null)[]): { [key: string]: Object | null };
    static not(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): InventoryRequirements;
    static values(): (Object | null)[];
    private constructor(tag: string)
    readonly tag: string;
    and(arg0: (param0: T) => kotlin.Boolean): (param0: T) => kotlin.Boolean;
    negate(): (param0: T) => kotlin.Boolean;
    or(arg0: (param0: T) => kotlin.Boolean): (param0: T) => kotlin.Boolean;
    test(action: InventoryAction): boolean;
    name(): "NO_MOVEMENT" | "NO_ROTATION" | "NOT_USING_ITEM" | "NOT_BREAKING" | "NOT_DURING_COMBAT" | "OPEN_INVENTORY";
}