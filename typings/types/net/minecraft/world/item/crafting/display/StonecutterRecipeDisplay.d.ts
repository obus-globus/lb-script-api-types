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
export class StonecutterRecipeDisplay extends Record implements RecipeDisplay {
    static CODEC: Codec<RecipeDisplay>;
    static MAP_CODEC: MapCodec<StonecutterRecipeDisplay>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, StonecutterRecipeDisplay>;
    static TYPE: RecipeDisplay$Type<StonecutterRecipeDisplay>;
    constructor(input: SlotDisplay, result: SlotDisplay, craftingStation: SlotDisplay)
    // private craftingStation: SlotDisplay;
    // private input: SlotDisplay;
    // private result: SlotDisplay;
    craftingStation(): SlotDisplay;
    equals(o: Object | null): boolean;
    hashCode(): number;
    input(): SlotDisplay;
    isEnabled(enabledFeatures: FeatureFlagSet): boolean;
    result(): SlotDisplay;
    toString(): string;
    type(): RecipeDisplay$Type<StonecutterRecipeDisplay>;
}