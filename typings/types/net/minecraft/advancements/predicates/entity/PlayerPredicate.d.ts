import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FoodPredicate } from '../../../../../net/minecraft/advancements/predicates/FoodPredicate.d.ts'
import type { GameTypePredicate } from '../../../../../net/minecraft/advancements/predicates/GameTypePredicate.d.ts'
import type { InputPredicate } from '../../../../../net/minecraft/advancements/predicates/InputPredicate.d.ts'
import type { MinMaxBounds$Ints } from '../../../../../net/minecraft/advancements/predicates/MinMaxBounds$Ints.d.ts'
import type { EntityPredicate } from '../../../../../net/minecraft/advancements/predicates/entity/EntityPredicate.d.ts'
import type { EntitySubPredicate } from '../../../../../net/minecraft/advancements/predicates/entity/EntitySubPredicate.d.ts'
import type { PlayerPredicate$AdvancementPredicate } from '../../../../../net/minecraft/advancements/predicates/entity/PlayerPredicate$AdvancementPredicate.d.ts'
import type { PlayerPredicate$StatMatcher } from '../../../../../net/minecraft/advancements/predicates/entity/PlayerPredicate$StatMatcher.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ServerLevel } from '../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class PlayerPredicate extends Record implements EntitySubPredicate {
    static ALWAYS_TRUE: EntitySubPredicate;
    static CODEC: Codec<PlayerPredicate>;
    static LOOKING_AT_RANGE: number;
    constructor(level: MinMaxBounds$Ints, food: FoodPredicate, gameType: GameTypePredicate, stats: PlayerPredicate$StatMatcher<Object>[], recipes: { [key: string]: any }, advancements: Map<Identifier, PlayerPredicate$AdvancementPredicate>, lookingAt: Optional<EntityPredicate>, input: Optional<InputPredicate>)
    // private advancements: Map<Identifier, PlayerPredicate$AdvancementPredicate>;
    // private food: FoodPredicate;
    // private gameType: GameTypePredicate;
    // private input: Optional<InputPredicate>;
    // private level: MinMaxBounds$Ints;
    // private lookingAt: Optional<EntityPredicate>;
    // private recipes: { [key: string]: any };
    // private stats: PlayerPredicate$StatMatcher<Object>[];
    advancements(): Map<Identifier, PlayerPredicate$AdvancementPredicate>;
    and(other: EntitySubPredicate): EntitySubPredicate;
    equals(o: Object | null): boolean;
    food(): FoodPredicate;
    gameType(): GameTypePredicate;
    hashCode(): number;
    input(): Optional<InputPredicate>;
    level(): MinMaxBounds$Ints;
    lookingAt(): Optional<EntityPredicate>;
    matches(entity: Entity, level: ServerLevel, position: Vec3): boolean;
    recipes(): { [key: string]: any };
    stats(): PlayerPredicate$StatMatcher<Object>[];
    toString(): string;
}