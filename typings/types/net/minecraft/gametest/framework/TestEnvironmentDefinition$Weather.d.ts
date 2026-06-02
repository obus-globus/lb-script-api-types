import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { TestEnvironmentDefinition } from '../../../../net/minecraft/gametest/framework/TestEnvironmentDefinition.d.ts'
import type { TestEnvironmentDefinition$Activation } from '../../../../net/minecraft/gametest/framework/TestEnvironmentDefinition$Activation.d.ts'
import type { TestEnvironmentDefinition$Weather$Type } from '../../../../net/minecraft/gametest/framework/TestEnvironmentDefinition$Weather$Type.d.ts'
import type { ServerLevel } from '../../../../net/minecraft/server/level/ServerLevel.d.ts'
export class TestEnvironmentDefinition$Weather extends Record implements TestEnvironmentDefinition<TestEnvironmentDefinition$Weather$Type> {
    static CODEC: Codec<Object>;
    static CODEC: MapCodec<TestEnvironmentDefinition$Weather>;
    static DIRECT_CODEC: Codec<Object>;
    static activate(paramenvironment: TestEnvironmentDefinition<Object>, paramlevel: ServerLevel): TestEnvironmentDefinition$Activation<Object>;
    static bootstrap(paramregistry: (Object | null)[]): MapCodec<Object>;
    constructor(weather: TestEnvironmentDefinition$Weather$Type)
    // private weather: TestEnvironmentDefinition$Weather$Type;
    codec(): MapCodec<TestEnvironmentDefinition$Weather>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    setup(level: ServerLevel): TestEnvironmentDefinition$Weather$Type;
    teardown(level: ServerLevel, saveData: TestEnvironmentDefinition$Weather$Type): void;
    toString(): string;
    weather(): TestEnvironmentDefinition$Weather$Type;
}