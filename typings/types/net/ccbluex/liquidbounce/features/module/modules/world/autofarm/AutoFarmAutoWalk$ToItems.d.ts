import type { ToggleableValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { Filter } from '../../../../../../../../net/ccbluex/liquidbounce/utils/collection/Filter.d.ts'
import type { ItemEntity } from '../../../../../../../../net/minecraft/world/entity/item/ItemEntity.d.ts'
import type { Item } from '../../../../../../../../net/minecraft/world/item/Item.d.ts'
export class AutoFarmAutoWalk$ToItems extends ToggleableValueGroup {
    static INSTANCE: AutoFarmAutoWalk$ToItems;
    // private filter: Filter;
    // private /*not mapped: */ getFilter(): Filter;
    // private items: Item[];
    // private /*not mapped: */ getItems(): Item[];
    // private range: number;
    // private /*not mapped: */ getRange(): number;
    readonly rangeSquared: number;
    shouldPickUp(itemEntity: ItemEntity): boolean;
}