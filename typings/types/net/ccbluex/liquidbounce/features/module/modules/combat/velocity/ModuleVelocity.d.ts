import type { ModeValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { EventHook } from '../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { PacketEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
import type { ClientModule } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { VelocityMode } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/velocity/mode/VelocityMode.d.ts'
/**
 * Velocity module
 *
 * Modifies the amount of velocity you take.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/22738df37d7103789b42b7477782868b55185597/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/velocity/ModuleVelocity.kt#L55 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/velocity/ModuleVelocity.kt:55}
 */
export class ModuleVelocity extends ClientModule {
    static INSTANCE: ModuleVelocity;
    // private delay: { start: number; endInclusive: number; step: number };
    // private /*not mapped: */ getDelay(): { start: number; endInclusive: number; step: number };
    readonly modes: ModeValueGroup<VelocityMode>;
    getModes(): ModeValueGroup<VelocityMode>;
    // private packetHandler: EventHook<PacketEvent>;
    // private pause: number;
    /*not mapped: */ getPause$net_ccbluex_liquidbounce(): number;
    // private pauseHandler: EventHook<GameTickEvent>;
    // private pauseOnFlag: number;
    // private /*not mapped: */ getPauseOnFlag(): number;
}