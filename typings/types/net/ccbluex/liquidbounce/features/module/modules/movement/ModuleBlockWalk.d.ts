import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { BlockShapeEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/BlockShapeEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { Block } from '../../../../../../../net/minecraft/world/level/block/Block.d.ts'
/**
 * BlockWalk module
 *
 * Allows you to walk on non-fullblock blocks.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleBlockWalk.kt#L29 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleBlockWalk.kt:29}
 */
export class ModuleBlockWalk extends ClientModule {
    static INSTANCE: ModuleBlockWalk;
    // private blocks: Block[];
    // private /*not mapped: */ getBlocks(): Block[];
    readonly shapeHandler: EventHook<BlockShapeEvent>;
}