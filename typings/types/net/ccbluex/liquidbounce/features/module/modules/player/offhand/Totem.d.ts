import type { ToggleableValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { Chronometer } from '../../../../../../../../net/ccbluex/liquidbounce/utils/client/Chronometer.d.ts'
import type { InventoryAction$Click } from '../../../../../../../../net/ccbluex/liquidbounce/utils/inventory/InventoryAction$Click.d.ts'
export class Totem extends ToggleableValueGroup {
    static INSTANCE: Totem;
    // private sendDirectly: boolean;
    // private /*not mapped: */ getSendDirectly(): boolean;
    readonly switchBack: Chronometer;
    /**
     * The totem mode might have a higher and separate switch back delay than other items.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fc8688f1fc8b0c8dfed8d3dc547a47ad55374af5/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/offhand/Totem.kt#L57 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/offhand/Totem.kt:57}
     */
    readonly switchBackDelay: number;
    switchBackStarted: boolean;
    /**
     * The totem mode might have a lower switch delay than other items.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fc8688f1fc8b0c8dfed8d3dc547a47ad55374af5/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/offhand/Totem.kt#L52 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/offhand/Totem.kt:52}
     */
    readonly switchDelay: number;
    /**
     * @returns `true` if the {@link actions} got performed.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fc8688f1fc8b0c8dfed8d3dc547a47ad55374af5/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/offhand/Totem.kt#L290 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/offhand/Totem.kt:290}
     */
    send(actions: InventoryAction$Click[]): boolean;
    shouldEquip(): boolean;
}