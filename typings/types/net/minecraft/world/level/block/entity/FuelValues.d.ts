import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { HolderLookup$Provider } from '../../../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { FeatureFlagSet } from '../../../../../../net/minecraft/world/flag/FeatureFlagSet.d.ts'
import type { Item } from '../../../../../../net/minecraft/world/item/Item.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class FuelValues extends Object {
    static vanillaBurnTimes(paramregistries: HolderLookup$Provider, paramenabledFeatures: FeatureFlagSet): FuelValues;
    static vanillaBurnTimes(paramregistries: HolderLookup$Provider, paramenabledFeatures: FeatureFlagSet, parambaseUnit: number): FuelValues;
    private constructor(values: JavaMap<any, any>)
    // private values: JavaMap<any, any>;
    burnDuration(itemStack: ItemStack): number;
    fuelItems(): Item[];
    isFuel(itemStack: ItemStack): boolean;
}