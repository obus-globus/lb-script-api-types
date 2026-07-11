import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
/**
 * Uses wind charges to boost yourself up when holding jump.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2f6d19f3612ad2b226f28cf69d3c1606d4c2e8fa/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/ModuleAutoWindCharge.kt#L43 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/ModuleAutoWindCharge.kt:43}
 */
export class ModuleAutoWindCharge extends ClientModule {
    static INSTANCE: ModuleAutoWindCharge;
    /**
     * 7 ticks is the perfect time to use a wind charge before hitting the ground,
     * and drastically boosts us higher.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2f6d19f3612ad2b226f28cf69d3c1606d4c2e8fa/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/ModuleAutoWindCharge.kt#L65 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/ModuleAutoWindCharge.kt:65}
     */
    static PREDICTION_TICKS: number;
    PREDICTION_TICKS: number;
    // private autoWindChargeHandler: EventHook<GameTickEvent>;
    // private combatPauseTime: number;
    // private /*not mapped: */ getCombatPauseTime(): number;
    // private slotResetDelay: { start: number; endInclusive: number; step: number };
    // private /*not mapped: */ getSlotResetDelay(): { start: number; endInclusive: number; step: number };
}