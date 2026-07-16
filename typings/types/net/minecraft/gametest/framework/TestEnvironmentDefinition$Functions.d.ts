import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { TestEnvironmentDefinition } from '../../../../net/minecraft/gametest/framework/TestEnvironmentDefinition.d.ts'
import type { TestEnvironmentDefinition$Activation } from '../../../../net/minecraft/gametest/framework/TestEnvironmentDefinition$Activation.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
import type { ServerLevel } from '../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { Unit } from '../../../../net/minecraft/util/Unit.d.ts'
export class TestEnvironmentDefinition$Functions extends Record implements TestEnvironmentDefinition<Unit> {
    static CODEC: MapCodec<TestEnvironmentDefinition$Functions>;
    static DIRECT_CODEC: Codec<TestEnvironmentDefinition<Object>>;
    static activate<T extends unknown>(paramenvironment: TestEnvironmentDefinition<T>, paramlevel: ServerLevel): TestEnvironmentDefinition$Activation<T>;
    static bootstrap(paramregistry: MapCodec<TestEnvironmentDefinition<Object>>[]): MapCodec<TestEnvironmentDefinition<Object>>;
    constructor(setupFunction: Optional<Identifier>, teardownFunction: Optional<Identifier>)
    // private setupFunction: Optional<Identifier>;
    // private teardownFunction: Optional<Identifier>;
    codec(): MapCodec<TestEnvironmentDefinition$Functions>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    setup(level: ServerLevel): Unit;
    setupFunction(): Optional<Identifier>;
    teardown(level: ServerLevel, saveData: Unit): void;
    teardownFunction(): Optional<Identifier>;
    toString(): string;
}