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
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2f6d19f3612ad2b226f28cf69d3c1606d4c2e8fa/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/ModuleNoBlockInteract.kt#L39 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/ModuleNoBlockInteract.kt:39}
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