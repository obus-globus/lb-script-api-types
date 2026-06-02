import type { ToggleableValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { Clicker } from '../../../../../../../net/ccbluex/liquidbounce/utils/clicking/Clicker.d.ts'
import type { Item } from '../../../../../../../net/minecraft/world/item/Item.d.ts'
import type { Block } from '../../../../../../../net/minecraft/world/level/block/Block.d.ts'
export class ModuleAutoClicker$UseButton extends ToggleableValueGroup {
    static INSTANCE: ModuleAutoClicker$UseButton;
    // private blocksForIgnore: Block[];
    /*not mapped: */ getBlocksForIgnore$liquidbounce(): Block[];
    readonly clicker: Clicker<ModuleAutoClicker$UseButton>;
    // private delayStart: boolean;
    /*not mapped: */ getDelayStart$liquidbounce(): boolean;
    // private holdingItemsForIgnore: Item[];
    /*not mapped: */ getHoldingItemsForIgnore$liquidbounce(): Item[];
    // private needToWait: boolean;
    /*not mapped: */ getNeedToWait$liquidbounce(): boolean;
    // private onlyBlock: boolean;
    /*not mapped: */ getOnlyBlock$liquidbounce(): boolean;
    // private requiresNoInput: boolean;
    /*not mapped: */ getRequiresNoInput$liquidbounce(): boolean;
}