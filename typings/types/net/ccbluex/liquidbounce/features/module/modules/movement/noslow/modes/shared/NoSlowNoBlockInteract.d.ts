import type { Predicate } from '../../../../../../../../../../java/util/function/Predicate.d.ts'
import type { ToggleableValueGroup } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { EventHook } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { EventListener } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { PacketEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
import type { ItemUseAnimation } from '../../../../../../../../../../net/minecraft/world/item/ItemUseAnimation.d.ts'
/**
 * Cancels block interactions allowing to bypass certain anti-cheats
 *
 * Tested on Watchdog-AntiCheat (hypixel.net)
 * Confirmed to be working on 25th of May 2024
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/noslow/modes/shared/NoSlowNoBlockInteract.kt#L31 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/noslow/modes/shared/NoSlowNoBlockInteract.kt:31}
 */
export class NoSlowNoBlockInteract extends ToggleableValueGroup {
    constructor(parent: EventListener | null, actionFilter: (param0: ItemUseAnimation) => kotlin.Boolean)
    readonly packetHandler: EventHook<PacketEvent>;
}