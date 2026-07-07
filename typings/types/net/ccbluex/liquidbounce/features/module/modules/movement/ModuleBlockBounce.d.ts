import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { PlayerJumpEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/PlayerJumpEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
/**
 * BlockBounce module
 *
 * Allows you to bounce higher on bouncy blocks.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fc8688f1fc8b0c8dfed8d3dc547a47ad55374af5/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleBlockBounce.kt#L36 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleBlockBounce.kt:36}
 */
export class ModuleBlockBounce extends ClientModule {
    static INSTANCE: ModuleBlockBounce;
    readonly jumpHandler: EventHook<PlayerJumpEvent>;
    // private motion: number;
    // private /*not mapped: */ getMotion(): number;
    // private standingOnBouncyBlock(): boolean;
}