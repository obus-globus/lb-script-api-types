import type { ImmutableList$Builder } from '../../../../../com/google/common/collect/ImmutableList$Builder.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FoodPredicate } from '../../../../../net/minecraft/advancements/predicates/FoodPredicate.d.ts'
import type { GameTypePredicate } from '../../../../../net/minecraft/advancements/predicates/GameTypePredicate.d.ts'
import type { InputPredicate } from '../../../../../net/minecraft/advancements/predicates/InputPredicate.d.ts'
import type { MinMaxBounds$Ints } from '../../../../../net/minecraft/advancements/predicates/MinMaxBounds$Ints.d.ts'
import type { EntityPredicate } from '../../../../../net/minecraft/advancements/predicates/entity/EntityPredicate.d.ts'
import type { EntityPredicate$Builder } from '../../../../../net/minecraft/advancements/predicates/entity/EntityPredicate$Builder.d.ts'
import type { PlayerPredicate } from '../../../../../net/minecraft/advancements/predicates/entity/PlayerPredicate.d.ts'
import type { PlayerPredicate$AdvancementPredicate } from '../../../../../net/minecraft/advancements/predicates/entity/PlayerPredicate$AdvancementPredicate.d.ts'
import type { PlayerPredicate$StatMatcher } from '../../../../../net/minecraft/advancements/predicates/entity/PlayerPredicate$StatMatcher.d.ts'
import type { Holder$Reference } from '../../../../../net/minecraft/core/Holder$Reference.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { Stat } from '../../../../../net/minecraft/stats/Stat.d.ts'
import type { Recipe } from '../../../../../net/minecraft/world/item/crafting/Recipe.d.ts'
export class PlayerPredicate$Builder extends Object {
    static player(): PlayerPredicate$Builder;
    constructor()
    // private advancements: Map<Identifier, PlayerPredicate$AdvancementPredicate>;
    // private food: FoodPredicate;
    // private gameType: GameTypePredicate;
    // private input: Optional<InputPredicate>;
    // private level: MinMaxBounds$Ints;
    // private lookingAt: Optional<EntityPredicate>;
    // private recipes: { [key: string]: any };
    // private stats: ImmutableList$Builder<PlayerPredicate$StatMatcher<Object>>;
    addRecipe(recipe: ResourceKey<Recipe<any>>, present: boolean): PlayerPredicate$Builder;
    addStat<T extends unknown>(type: Stat<T>[], value: Holder$Reference<T>, range: MinMaxBounds$Ints): PlayerPredicate$Builder;
    build(): PlayerPredicate;
    checkAdvancementCriterions(advancement: Identifier, criterions: { [key: string]: boolean }): PlayerPredicate$Builder;
    checkAdvancementDone(advancement: Identifier, isDone: boolean): PlayerPredicate$Builder;
    hasInput(input: InputPredicate): PlayerPredicate$Builder;
    setFood(food: FoodPredicate): PlayerPredicate$Builder;
    setGameType(gameType: GameTypePredicate): PlayerPredicate$Builder;
    setLevel(level: MinMaxBounds$Ints): PlayerPredicate$Builder;
    setLookingAt(lookingAt: EntityPredicate$Builder): PlayerPredicate$Builder;
}