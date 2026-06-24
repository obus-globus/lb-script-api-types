import type { Pair } from '../../../../com/mojang/datafixers/util/Pair.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { RecipeCategory } from '../../../../net/minecraft/data/recipes/RecipeCategory.d.ts'
import type { Block } from '../../../../net/minecraft/world/level/block/Block.d.ts'
import type { WeatheringCopperCollection } from '../../../../net/minecraft/world/level/block/WeatheringCopperCollection.d.ts'
export class HoneycombItem$WaxedRecipeGroup extends Record {
    private constructor(block: WeatheringCopperCollection<Block>, recipeIdProvider: (param0: Block) => Pair<RecipeCategory, string>)
    // private block: WeatheringCopperCollection<Block>;
    // private recipeIdProvider: (param0: Block) => Pair<RecipeCategory, string>;
    block(): WeatheringCopperCollection<Block>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    recipeIdProvider(): (param0: Block) => Pair<RecipeCategory, string>;
    toString(): string;
}