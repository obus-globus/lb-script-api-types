import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { GameType } from '../../../../net/minecraft/world/level/GameType.d.ts'
export class GameTypePredicate extends Record {
    static ANY: GameTypePredicate;
    static CODEC: Codec<GameTypePredicate>;
    static SURVIVAL_LIKE: GameTypePredicate;
    static of(paramtypes: (Object | null)[]): GameTypePredicate;
    constructor(types: GameType[])
    // private types: GameType[];
    equals(o: Object | null): boolean;
    hashCode(): number;
    matches(type: GameType): boolean;
    toString(): string;
    types(): GameType[];
}