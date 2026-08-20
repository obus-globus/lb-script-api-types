import type { EventHook } from '../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { PlayerUseMultiplier } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/PlayerUseMultiplier.d.ts'
import type { ClientModule } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { Vec2 } from '../../../../../../../../net/minecraft/world/phys/Vec2.d.ts'
/**
 * NoSlow module
 *
 * Cancels slowness effects caused by blocks and using items.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a9cf2b145901ecd37d3f2a815c20cf0955e76853/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/noslow/ModuleNoSlow.kt#L45 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/noslow/ModuleNoSlow.kt:45}
 */
export class ModuleNoSlow extends ClientModule {
    static INSTANCE: ModuleNoSlow;
    // private multiplierHandler: EventHook<PlayerUseMultiplier>;
    // private multiplier(forward: number, sideways: number): Vec2;
}