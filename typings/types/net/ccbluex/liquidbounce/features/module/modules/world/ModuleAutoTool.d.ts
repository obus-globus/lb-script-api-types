import type { ModeValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { BlockBreakingProgressEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/BlockBreakingProgressEvent.d.ts'
import type { CancelBlockBreakingEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/CancelBlockBreakingEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ModuleAutoTool$ToolSelectorMode } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/ModuleAutoTool$ToolSelectorMode.d.ts'
import type { Filter } from '../../../../../../../net/ccbluex/liquidbounce/utils/collection/Filter.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Block } from '../../../../../../../net/minecraft/world/level/block/Block.d.ts'
/**
 * AutoTool module
 *
 * Automatically chooses the best tool in your inventory to mine a block.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/64f9c02ca90d2728f0d1fffd459b622eb8239747/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/ModuleAutoTool.kt#L56 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/ModuleAutoTool.kt:56}
 */
export class ModuleAutoTool extends ClientModule {
    static INSTANCE: ModuleAutoTool;
    // private blocks: Block[];
    // private /*not mapped: */ getBlocks(): Block[];
    // private filter: Filter;
    // private /*not mapped: */ getFilter(): Filter;
    // private handleBlockBreakingProgress: EventHook<BlockBreakingProgressEvent>;
    // private handleCancelBlockBreaking: EventHook<CancelBlockBreakingEvent>;
    /*not mapped: */ isInventoryConsidered(): boolean;
    // private notDuringCombat: boolean;
    // private /*not mapped: */ getNotDuringCombat(): boolean;
    // private requireSneaking: boolean;
    // private /*not mapped: */ getRequireSneaking(): boolean;
    // private swapPreviousDelay: number;
    // private /*not mapped: */ getSwapPreviousDelay(): number;
    readonly toolSelector: ModeValueGroup<ModuleAutoTool$ToolSelectorMode>;
    onDisabled(): void;
    switchToBreakBlock(pos: BlockPos): void;
}