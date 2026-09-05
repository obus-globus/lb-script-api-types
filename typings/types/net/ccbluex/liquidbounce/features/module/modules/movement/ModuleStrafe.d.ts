import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { PlayerMoveEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/PlayerMoveEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
/**
 * Strafe module
 *
 * Strafe into different directions while you're midair.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/64f9c02ca90d2728f0d1fffd459b622eb8239747/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleStrafe.kt#L35 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleStrafe.kt:35}
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