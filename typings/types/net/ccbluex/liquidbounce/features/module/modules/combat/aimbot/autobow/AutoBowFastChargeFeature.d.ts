import type { ToggleableValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { MovePacketType } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/network/MovePacketType.d.ts'
/**
 * @desc Fast charge options (like FastBow) can be used to charge the bow faster.
 * @warning Should only be used on vanilla minecraft. Most anti cheats patch these kinds of exploits
 *
 * TODO: Add version specific options
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/aimbot/autobow/AutoBowFastChargeFeature.kt#L32 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/aimbot/autobow/AutoBowFastChargeFeature.kt:32}
 */
export class AutoBowFastChargeFeature extends ToggleableValueGroup {
    static INSTANCE: AutoBowFastChargeFeature;
    // private notDuringMove: boolean;
    // private /*not mapped: */ getNotDuringMove(): boolean;
    // private notDuringRegeneration: boolean;
    // private /*not mapped: */ getNotDuringRegeneration(): boolean;
    // private notInTheAir: boolean;
    // private /*not mapped: */ getNotInTheAir(): boolean;
    // private packetType: MovePacketType;
    // private /*not mapped: */ getPacketType(): MovePacketType;
    // private speed: number;
    // private /*not mapped: */ getSpeed(): number;
    // private tickRepeatable: EventHook<GameTickEvent>;
}