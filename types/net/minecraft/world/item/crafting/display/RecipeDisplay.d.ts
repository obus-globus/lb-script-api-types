import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FeatureFlagSet } from '../../../../../../net/minecraft/world/flag/FeatureFlagSet.d.ts'
import type { RecipeDisplay$Type } from '../../../../../../net/minecraft/world/item/crafting/display/RecipeDisplay$Type.d.ts'
import type { SlotDisplay } from '../../../../../../net/minecraft/world/item/crafting/display/SlotDisplay.d.ts'
export interface RecipeDisplay extends Object{
    craftingStation(): SlotDisplay;
    isEnabled(enabledFeatures: FeatureFlagSet): boolean;
    result(): SlotDisplay;
    type(): RecipeDisplay$Type<RecipeDisplay>;
}