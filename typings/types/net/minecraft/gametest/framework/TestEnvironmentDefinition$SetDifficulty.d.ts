import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { TestEnvironmentDefinition } from '../../../../net/minecraft/gametest/framework/TestEnvironmentDefinition.d.ts'
import type { TestEnvironmentDefinition$Activation } from '../../../../net/minecraft/gametest/framework/TestEnvironmentDefinition$Activation.d.ts'
import type { ServerLevel } from '../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { Difficulty } from '../../../../net/minecraft/world/Difficulty.d.ts'
export class TestEnvironmentDefinition$SetDifficulty extends Record implements TestEnvironmentDefinition<Difficulty> {
    static CODEC: MapCodec<TestEnvironmentDefinition$SetDifficulty>;
    static DIRECT_CODEC: Codec<TestEnvironmentDefinition<Object>>;
    static activate(paramenvironment: TestEnvironmentDefinition<Object>, paramlevel: ServerLevel): TestEnvironmentDefinition$Activation<Object>;
    static bootstrap(paramregistry: MapCodec<TestEnvironmentDefinition<Object>>[]): MapCodec<TestEnvironmentDefinition<Object>>;
    constructor(difficulty: Difficulty)
    // private difficulty: Difficulty;
    codec(): MapCodec<TestEnvironmentDefinition$SetDifficulty>;
    difficulty(): Difficulty;
    equals(o: Object | null): boolean;
    hashCode(): number;
    setup(level: ServerLevel): Difficulty;
    teardown(level: ServerLevel, saveData: Difficulty): void;
    toString(): string;
}