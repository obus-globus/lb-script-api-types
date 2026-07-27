import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { MovementInputEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/MovementInputEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { BlockHitResult } from '../../../../../../../net/minecraft/world/phys/BlockHitResult.d.ts'
/**
 * NoBlockInteract module
 *
 * Allows to use items without interacting with blocks.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/c86714198f6c981b97c9965ca188b8b8598816e4/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/ModuleNoBlockInteract.kt#L39 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/ModuleNoBlockInteract.kt:39}
 */
export class ModuleNoBlockInteract extends ClientModule {
    static INSTANCE: ModuleNoBlockInteract;
    // private handleGameTick: EventHook<GameTickEvent>;
    // private handleMovementInput: EventHook<MovementInputEvent>;
    // private interacting: boolean;
    // private sneaking: boolean;
    shouldSneak(blockHitResult: BlockHitResult): boolean;
    startSneaking(): void;
}