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
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/offhand/Totem.kt#L53 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/offhand/Totem.kt:53}
     */
    readonly switchBackDelay: number;
    switchBackStarted: boolean;
    /**
     * The totem mode might have a lower switch delay than other items.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/offhand/Totem.kt#L48 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/offhand/Totem.kt:48}
     */
    readonly switchDelay: number;
    /**
     * @returns `true` if the {@link actions} got performed.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/offhand/Totem.kt#L285 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/offhand/Totem.kt:285}
     */
    send(actions: InventoryAction$Click[]): boolean;
    shouldEquip(): boolean;
}