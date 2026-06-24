import type { ToggleableValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { Clicker } from '../../../../../../../net/ccbluex/liquidbounce/utils/clicking/Clicker.d.ts'
import type { Item } from '../../../../../../../net/minecraft/world/item/Item.d.ts'
import type { Block } from '../../../../../../../net/minecraft/world/level/block/Block.d.ts'
export class ModuleAutoClicker$UseButton extends ToggleableValueGroup {
    static INSTANCE: ModuleAutoClicker$UseButton;
    // private blocksForIgnore: Block[];
    /*not mapped: */ getBlocksForIgnore$net_ccbluex_liquidbounce(): Block[];
    readonly clicker: Clicker<ModuleAutoClicker$UseButton>;
    // private delayStart: boolean;
    /*not mapped: */ getDelayStart$net_ccbluex_liquidbounce(): boolean;
    // private holdingItemsForIgnore: Item[];
    /*not mapped: */ getHoldingItemsForIgnore$net_ccbluex_liquidbounce(): Item[];
    // private needToWait: boolean;
    /*not mapped: */ getNeedToWait$net_ccbluex_liquidbounce(): boolean;
    // private onlyBlock: boolean;
    /*not mapped: */ getOnlyBlock$net_ccbluex_liquidbounce(): boolean;
    // private requiresNoInput: boolean;
    /*not mapped: */ getRequiresNoInput$net_ccbluex_liquidbounce(): boolean;
}