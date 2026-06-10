import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Stream } from '../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { GameRule } from '../../../../../net/minecraft/world/level/gamerules/GameRule.d.ts'
import type { SavedData } from '../../../../../net/minecraft/world/level/saveddata/SavedData.d.ts'
import type { SavedDataType } from '../../../../../net/minecraft/world/level/saveddata/SavedDataType.d.ts'
export class GameRuleMap extends SavedData {
    static CODEC: Codec<GameRuleMap>;
    static TYPE: SavedDataType<GameRuleMap>;
    static copyOf(paramgameRuleMap: GameRuleMap): GameRuleMap;
    static of(): GameRuleMap;
    static of(paramgameRuleTypeStream: Stream<GameRule<Object>>): GameRuleMap;
    private constructor(map: Map<GameRule<Object>, Object>)
    // private map: Map<GameRule<Object>, Object>;
    equals(obj: Object | null): boolean;
    get<T extends Object | number | string | boolean>(gameRule: GameRule<T>): T;
    has(gameRule: GameRule<Object>): boolean;
    hashCode(): number;
    keySet(): GameRule<Object>[];
    // private map(): Map<GameRule<Object>, Object>;
    remove<T extends Object | number | string | boolean>(gameRule: GameRule<T>): T;
    reset<T extends Object | number | string | boolean>(gameRule: GameRule<T>): void;
    set<T extends Object | number | string | boolean>(gameRule: GameRule<T>, value: T): void;
    setFromIf(other: GameRuleMap, predicate: (param0: GameRule<Object>) => boolean): void;
    size(): number;
    toString(): string;
    withOther(other: GameRuleMap): GameRuleMap;
}