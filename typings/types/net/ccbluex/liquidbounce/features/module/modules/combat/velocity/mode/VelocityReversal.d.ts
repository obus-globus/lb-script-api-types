import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { PacketEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
import type { PlayerTickEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/PlayerTickEvent.d.ts'
import type { VelocityMode } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/velocity/mode/VelocityMode.d.ts'
/**
 * A velocity mode that reverses your velocity after a set amount of ticks.
 * Default values bypass Vulcan (3/9/25) ~ anticheat-test.com
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/7419c75563c98eff050759c8dc8d8c35ed59d950/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/velocity/mode/VelocityReversal.kt#L32 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/velocity/mode/VelocityReversal.kt:32}
 */
export class VelocityReversal extends VelocityMode {
    static Companion: Tagged$Companion;
    static INSTANCE: VelocityReversal;
    // private delay: number;
    // private /*not mapped: */ getDelay(): number;
    // private handlingVelocity: boolean;
    // private onlyMoving: boolean;
    // private /*not mapped: */ getOnlyMoving(): boolean;
    // private packetEventHandler: EventHook<PacketEvent>;
    // private playerTickHandler: EventHook<PlayerTickEvent>;
    // private velocityTicks: number;
    // private xModifier: number;
    // private /*not mapped: */ getXModifier(): number;
    // private zModifier: number;
    // private /*not mapped: */ getZModifier(): number;
    // private reset(): void;
}