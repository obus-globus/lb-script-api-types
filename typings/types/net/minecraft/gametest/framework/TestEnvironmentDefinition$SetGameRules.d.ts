import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { TestEnvironmentDefinition } from '../../../../net/minecraft/gametest/framework/TestEnvironmentDefinition.d.ts'
import type { TestEnvironmentDefinition$Activation } from '../../../../net/minecraft/gametest/framework/TestEnvironmentDefinition$Activation.d.ts'
import type { ServerLevel } from '../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { GameRuleMap } from '../../../../net/minecraft/world/level/gamerules/GameRuleMap.d.ts'
export class TestEnvironmentDefinition$SetGameRules extends Record implements TestEnvironmentDefinition<GameRuleMap> {
    static CODEC: Codec<Object>;
    static CODEC: MapCodec<TestEnvironmentDefinition$SetGameRules>;
    static DIRECT_CODEC: Codec<Object>;
    static activate(paramenvironment: TestEnvironmentDefinition<Object>, paramlevel: ServerLevel): TestEnvironmentDefinition$Activation<Object>;
    static bootstrap(paramregistry: (Object | null)[]): MapCodec<Object>;
    constructor(gameRulesMap: GameRuleMap)
    // private gameRulesMap: GameRuleMap;
    codec(): MapCodec<TestEnvironmentDefinition$SetGameRules>;
    equals(o: Object | null): boolean;
    gameRulesMap(): GameRuleMap;
    hashCode(): number;
    setup(level: ServerLevel): GameRuleMap;
    teardown(level: ServerLevel, saveData: GameRuleMap): void;
    toString(): string;
}