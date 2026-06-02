import type { Object } from '../../../../../../../../../../java/lang/Object.d.ts'
import type { Mode } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { PacketEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
import type { PlayerMoveEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/PlayerMoveEvent.d.ts'
/**
 * @remarks
 * - **Anticheat:** Version 2.8.6
 * - **Tested on:** eu.loyisa.cn, anticheat-test.com
 * - Few seconds cooldown to not flag. Requires 1.8 serverside
 *
 * @author Nullable
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/fly/modes/vulcan/FlyVulcan286Teleport.kt#L37 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/fly/modes/vulcan/FlyVulcan286Teleport.kt:37}
 */
export class FlyVulcan286Teleport extends Mode {
    static Companion: Tagged$Companion;
    static INSTANCE: FlyVulcan286Teleport;
    // private flagged: boolean;
    // private jumping: boolean;
    readonly moveHandler: EventHook<PlayerMoveEvent>;
    readonly packetHandler: EventHook<PacketEvent>;
    readonly parent: ModeValueGroup<Object>;
    /**
     * Alright, lets fly...
     * Fall damage is based on fall distance. By spoofing the ground
     * state to be false and jumping 3 times, you gain a fall distance
     * of 3 which is enough to take damage.
     *
     * After taking damage, vulcan gives leniency to all sorts of stuff like
     * motion, and teleporting.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/fly/modes/vulcan/FlyVulcan286Teleport.kt#L57 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/fly/modes/vulcan/FlyVulcan286Teleport.kt:57}
     */
    readonly repeatable: EventHook<GameTickEvent>;
    disable(): void;
}