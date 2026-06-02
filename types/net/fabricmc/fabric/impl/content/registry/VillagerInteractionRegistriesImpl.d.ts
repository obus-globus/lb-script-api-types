import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Item } from '../../../../../../net/minecraft/world/item/Item.d.ts'
export class VillagerInteractionRegistriesImpl extends Object {
    static getCompostableRegistry(): Item[];
    static getFoodRegistry(): Map<Item, number>;
    static getGatherableItemRegistry(): Item[];
    private constructor()
}