import type { Codec } from '../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../java/lang/Record.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { ResourceKey } from '../../../net/minecraft/resources/ResourceKey.d.ts'
import type { RecipeBookSettings } from '../../../net/minecraft/stats/RecipeBookSettings.d.ts'
import type { Recipe } from '../../../net/minecraft/world/item/crafting/Recipe.d.ts'
export class ServerRecipeBook$Packed extends Record {
    static CODEC: Codec<ServerRecipeBook$Packed>;
    constructor(settings: RecipeBookSettings, known: ResourceKey<Recipe<any>>[], highlight: ResourceKey<Recipe<any>>[])
    // private highlight: ResourceKey<Recipe<any>>[];
    // private known: ResourceKey<Recipe<any>>[];
    // private settings: RecipeBookSettings;
    equals(o: Object | null): boolean;
    hashCode(): number;
    highlight(): ResourceKey<Recipe<any>>[];
    known(): ResourceKey<Recipe<any>>[];
    settings(): RecipeBookSettings;
    toString(): string;
}