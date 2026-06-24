import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { MovementInputEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/MovementInputEvent.d.ts'
import type { PacketEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
import type { VelocityMode } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/velocity/mode/VelocityMode.d.ts'
/**
 * Jump Reset mode. A technique most players use to minimize the amount of knockback they get.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/velocity/mode/VelocityJumpReset.kt#L29 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/velocity/mode/VelocityJumpReset.kt:29}
 */
export class VelocityJumpReset extends VelocityMode {
    static Companion: Tagged$Companion;
    static INSTANCE: VelocityJumpReset;
    // private chance: number;
    // private /*not mapped: */ getChance(): number;
    // private hitsUntilJump: number;
    // private isFallDamage: boolean;
    // private limitUntilJump: number;
    // private movementInputHandler: EventHook<MovementInputEvent>;
    // private packetHandler: EventHook<PacketEvent>;
    // private ticksUntilJump: number;
    // private isCooldownOver(): boolean;
    // private updateLimit(): void;
}