import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { PacketEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
import type { VelocityMode } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/velocity/mode/VelocityMode.d.ts'
/**
 * Duplicate exempt grim
 * This is a technique that allows you to bypass the grim anti-cheat.
 *
 * It abuses the C06 duplicate exempt to bypass the velocity check.
 *
 * After sending a finish-mining digging packet that coincides with the player's
 * collision box and canceling the knockback packet sent by the server before the player's movement packet is sent,
 * grim seems to ignore the player's knockback
 *
 * https://github.com/GrimAnticheat/Grim/issues/1133
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2727616ee96ec8c4ceda97bebdd601f050a6856e/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/velocity/mode/VelocityGrim2344.kt#L41 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/velocity/mode/VelocityGrim2344.kt:41}
 */
export class VelocityGrim2344 extends VelocityMode {
    static Companion: Tagged$Companion;
    static INSTANCE: VelocityGrim2344;
    // private alternativeBypass: boolean;
    // private /*not mapped: */ getAlternativeBypass(): boolean;
    // private canCancel: boolean;
    // private packetHandler: EventHook<PacketEvent>;
    enable(): void;
}