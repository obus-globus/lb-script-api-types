import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { PlayerMoveEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/PlayerMoveEvent.d.ts'
import type { ElytraFlyMode } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/movement/elytrafly/modes/ElytraFlyMode.d.ts'
export class ElytraFlyModeStatic extends ElytraFlyMode {
    static Companion: Tagged$Companion;
    static INSTANCE: ElytraFlyModeStatic;
    /**
     * Only runs the exploit while the player isn't moving.
     * This might save some durability points
     * while not moving as some anti-cheats just detect this exploit when you move.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fc8688f1fc8b0c8dfed8d3dc547a47ad55374af5/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/elytrafly/modes/ElytraFlyModeStatic.kt#L35 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/elytrafly/modes/ElytraFlyModeStatic.kt:35}
     */
    readonly durabilityExploitNotWhileMove: boolean;
    // private moveHandler: EventHook<PlayerMoveEvent>;
}