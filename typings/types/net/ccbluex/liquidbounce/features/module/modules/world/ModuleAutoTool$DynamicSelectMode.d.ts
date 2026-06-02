import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { ModuleAutoTool$ToolSelectorMode } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/ModuleAutoTool$ToolSelectorMode.d.ts'
import type { HotbarItemSlot } from '../../../../../../../net/ccbluex/liquidbounce/utils/inventory/HotbarItemSlot.d.ts'
import type { BlockState } from '../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class ModuleAutoTool$DynamicSelectMode extends ModuleAutoTool$ToolSelectorMode {
    static Companion: Tagged$Companion;
    static INSTANCE: ModuleAutoTool$DynamicSelectMode;
    // private ignoreDurability: boolean;
    // private /*not mapped: */ getIgnoreDurability(): boolean;
    protected getToolSlot(blockState: BlockState): HotbarItemSlot | null;
}