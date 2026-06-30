import type { Mode } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { PacketEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
import type { PlayerMoveEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/PlayerMoveEvent.d.ts'
/**
 * @anticheat Vulcan
 * @anticheat Version 2.8.6
 * @testedOn eu.loyisa.cn, anticheat-test.com
 * @note Few seconds cooldown to not flag. Requires 1.8 serverside
 * @author Nullable
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/553a3caf47807e98e69ea3ce0e17bcd9e52eeb71/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/fly/modes/vulcan/FlyVulcan286Teleport.kt#L44 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/fly/modes/vulcan/FlyVulcan286Teleport.kt:44}
 */
export class FlyVulcan286Teleport extends Mode {
    static Companion: Tagged$Companion;
    static INSTANCE: FlyVulcan286Teleport;
    // private flagged: boolean;
    // private jumping: boolean;
    readonly moveHandler: EventHook<PlayerMoveEvent>;
    readonly packetHandler: EventHook<PacketEvent>;
    readonly parent: ModeValueGroup<any>;
    /**
     * Alright, lets fly...
     * Fall damage is based on fall distance. By spoofing the ground
     * state to be false and jumping 3 times, you gain a fall distance
     * of 3 which is enough to take damage.
     *
     * After taking damage, vulcan gives leniency to all sorts of stuff like
     * motion, and teleporting.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/553a3caf47807e98e69ea3ce0e17bcd9e52eeb71/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/fly/modes/vulcan/FlyVulcan286Teleport.kt#L66 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/fly/modes/vulcan/FlyVulcan286Teleport.kt:66}
     */
    readonly repeatable: EventHook<GameTickEvent>;
    disable(): void;
}