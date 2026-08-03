import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { BlockShapeEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/BlockShapeEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { Block } from '../../../../../../../net/minecraft/world/level/block/Block.d.ts'
/**
 * BlockWalk module
 *
 * Allows you to walk on non-fullblock blocks.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a0e57b28307a88c68b5bf7b52a54201b8a15cec8/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleBlockWalk.kt#L35 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleBlockWalk.kt:35}
 */
export class ModuleBlockWalk extends ClientModule {
    static INSTANCE: ModuleBlockWalk;
    // private blocks: Block[];
    // private /*not mapped: */ getBlocks(): Block[];
    readonly shapeHandler: EventHook<BlockShapeEvent>;
}