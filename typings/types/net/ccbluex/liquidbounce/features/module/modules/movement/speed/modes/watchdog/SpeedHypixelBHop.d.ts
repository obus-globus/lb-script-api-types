import type { ModeValueGroup } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { PacketEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
import type { PlayerJumpEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/PlayerJumpEvent.d.ts'
import type { SpeedBHopBase } from '../../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/movement/speed/modes/SpeedBHopBase.d.ts'
import type { SpeedHypixelBHop$Companion } from '../../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/movement/speed/modes/watchdog/SpeedHypixelBHop$Companion.d.ts'
/**
 * @remarks
 * - **Anticheat:** Watchdog (NCP) (12.12.2023)
 * - **Tested on:** hypixel.net
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/speed/modes/watchdog/SpeedHypixelBHop.kt#L37 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/speed/modes/watchdog/SpeedHypixelBHop.kt:37}
 */
export class SpeedHypixelBHop extends SpeedBHopBase {
    static Companion: Tagged$Companion;
    static Companion: SpeedHypixelBHop$Companion;
    constructor(parent: ModeValueGroup<any>)
    // private horizontalAcceleration: boolean;
    // private /*not mapped: */ getHorizontalAcceleration(): boolean;
    readonly jumpEvent: EventHook<PlayerJumpEvent>;
    /**
     * Damage Boost
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/speed/modes/watchdog/SpeedHypixelBHop.kt#L105 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/speed/modes/watchdog/SpeedHypixelBHop.kt:105}
     */
    readonly packetHandler: EventHook<PacketEvent>;
    readonly repeatable: EventHook<GameTickEvent>;
    // private verticalAcceleration: boolean;
    // private /*not mapped: */ getVerticalAcceleration(): boolean;
    // private wasFlagged: boolean;
    disable(): void;
}