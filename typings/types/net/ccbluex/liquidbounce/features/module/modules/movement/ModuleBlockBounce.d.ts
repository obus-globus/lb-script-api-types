import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { PlayerJumpEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/PlayerJumpEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
/**
 * BlockBounce module
 *
 * Allows you to bounce higher on bouncy blocks.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/177e1582d6f271ebe95911c43b6987f81dca51f8/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleBlockBounce.kt#L36 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleBlockBounce.kt:36}
 */
export class ModuleBlockBounce extends ClientModule {
    static INSTANCE: ModuleBlockBounce;
    readonly jumpHandler: EventHook<PlayerJumpEvent>;
    // private motion: number;
    // private /*not mapped: */ getMotion(): number;
    // private standingOnBouncyBlock(): boolean;
}