import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { PlayerMoveEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/PlayerMoveEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
/**
 * Strafe module
 *
 * Strafe into different directions while you're midair.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleStrafe.kt#L30 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleStrafe.kt:30}
 */
export class ModuleStrafe extends ClientModule {
    static INSTANCE: ModuleStrafe;
    readonly moveHandler: EventHook<PlayerMoveEvent>;
    // private strengthInAir: number;
    // private /*not mapped: */ getStrengthInAir(): number;
    // private strengthOnGround: number;
    // private /*not mapped: */ getStrengthOnGround(): number;
    // private strictMovement: boolean;
    // private /*not mapped: */ getStrictMovement(): boolean;
}