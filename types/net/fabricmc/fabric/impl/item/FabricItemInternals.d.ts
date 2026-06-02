import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FabricItemInternals$ExtraData } from '../../../../../net/fabricmc/fabric/impl/item/FabricItemInternals$ExtraData.d.ts'
import type { Item } from '../../../../../net/minecraft/world/item/Item.d.ts'
import type { Item$Properties } from '../../../../../net/minecraft/world/item/Item$Properties.d.ts'
export class FabricItemInternals extends Object {
    static computeExtraData(paramarg0: Item$Properties): FabricItemInternals$ExtraData;
    static onBuild(paramarg0: Item$Properties, paramarg1: Item): void;
    private constructor()
}