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
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fc8688f1fc8b0c8dfed8d3dc547a47ad55374af5/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/aimbot/autobow/AutoBowFastChargeFeature.kt#L38 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/aimbot/autobow/AutoBowFastChargeFeature.kt:38}
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