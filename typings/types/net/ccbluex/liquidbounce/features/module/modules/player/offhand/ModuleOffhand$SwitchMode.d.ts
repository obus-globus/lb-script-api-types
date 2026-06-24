import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { InventoryAction$Click } from '../../../../../../../../net/ccbluex/liquidbounce/utils/inventory/InventoryAction$Click.d.ts'
import type { ItemSlot } from '../../../../../../../../net/ccbluex/liquidbounce/utils/inventory/ItemSlot.d.ts'
export class ModuleOffhand$SwitchMode extends Enum<ModuleOffhand$SwitchMode> implements Tagged {
    /**
     * Chooses the switch action based on the version. Only works if vfp is installed.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/offhand/ModuleOffhand.kt#L410 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/offhand/ModuleOffhand.kt:410}
     */
    static AUTOMATIC: ModuleOffhand$SwitchMode;
    static Companion: Tagged$Companion;
    /**
     * Performs 2-3 a pickup actions.
     * Works on all versions.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/offhand/ModuleOffhand.kt#L402 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/offhand/ModuleOffhand.kt:402}
     */
    static PICKUP: ModuleOffhand$SwitchMode;
    /**
     * Pickup, but it performs a SWAP_ITEM_WITH_OFFHAND action whenever possible to send fewer packets.
     * Works on all versions.
     *
     * It's not the default because some servers kick you when you perform a SWAP_ITEM_WITH_OFFHAND action
     * often and quickly.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/offhand/ModuleOffhand.kt#L378 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/offhand/ModuleOffhand.kt:378}
     */
    static SMART: ModuleOffhand$SwitchMode;
    /**
     * Performs a switch action, works on 1.16.
     * The best method on newer servers.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/offhand/ModuleOffhand.kt#L389 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/offhand/ModuleOffhand.kt:389}
     */
    static SWITCH: ModuleOffhand$SwitchMode;
    static getEntries(): ModuleOffhand$SwitchMode[];
    static makeLookupTable(paramarg0: (Tagged | null)[]): { [key: string]: Tagged | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ModuleOffhand$SwitchMode;
    static values(): (Object | null)[];
    private constructor(tag: string)
    readonly tag: string;
    performSwitch(from: ItemSlot): InventoryAction$Click[];
    name(): "SMART" | "SWITCH" | "PICKUP" | "AUTOMATIC";
}