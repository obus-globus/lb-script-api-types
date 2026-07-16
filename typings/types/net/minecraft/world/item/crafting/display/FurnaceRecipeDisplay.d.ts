import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { FeatureFlagSet } from '../../../../../../net/minecraft/world/flag/FeatureFlagSet.d.ts'
import type { RecipeDisplay } from '../../../../../../net/minecraft/world/item/crafting/display/RecipeDisplay.d.ts'
import type { RecipeDisplay$Type } from '../../../../../../net/minecraft/world/item/crafting/display/RecipeDisplay$Type.d.ts'
import type { SlotDisplay } from '../../../../../../net/minecraft/world/item/crafting/display/SlotDisplay.d.ts'
export class FurnaceRecipeDisplay extends Record implements RecipeDisplay {
    static CODEC: Codec<RecipeDisplay>;
    static MAP_CODEC: MapCodec<FurnaceRecipeDisplay>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, FurnaceRecipeDisplay>;
    static TYPE: RecipeDisplay$Type<FurnaceRecipeDisplay>;
    constructor(ingredient: SlotDisplay, fuel: SlotDisplay, result: SlotDisplay, craftingStation: SlotDisplay, duration: number, experience: number)
    // private craftingStation: SlotDisplay;
    // private duration: number;
    // private experience: number;
    // private fuel: SlotDisplay;
    // private ingredient: SlotDisplay;
    // private result: SlotDisplay;
    craftingStation(): SlotDisplay;
    duration(): number;
    equals(o: Object | null): boolean;
    experience(): number;
    fuel(): SlotDisplay;
    hashCode(): number;
    ingredient(): SlotDisplay;
    isEnabled(enabledFeatures: FeatureFlagSet): boolean;
    result(): SlotDisplay;
    toString(): string;
    type(): RecipeDisplay$Type<FurnaceRecipeDisplay>;
}