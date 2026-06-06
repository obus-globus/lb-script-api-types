import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
/**
 * Uses wind charges to boost yourself up when holding jump.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/ModuleAutoWindCharge.kt#L40 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/ModuleAutoWindCharge.kt:40}
 */
export class ModuleAutoWindCharge extends ClientModule {
    static INSTANCE: ModuleAutoWindCharge;
    /**
     * 7 ticks is the perfect time to use a wind charge before hitting the ground,
     * and drastically boosts us higher.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/ModuleAutoWindCharge.kt#L61 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/ModuleAutoWindCharge.kt:61}
     */
    static PREDICTION_TICKS: number;
    PREDICTION_TICKS: number;
    // private autoWindChargeHandler: EventHook<GameTickEvent>;
    // private combatPauseTime: number;
    // private /*not mapped: */ getCombatPauseTime(): number;
    // private slotResetDelay: { start: number; endInclusive: number; step: number };
    // private /*not mapped: */ getSlotResetDelay(): { start: number; endInclusive: number; step: number };
}