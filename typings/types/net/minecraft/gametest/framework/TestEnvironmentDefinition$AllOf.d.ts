import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { TestEnvironmentDefinition } from '../../../../net/minecraft/gametest/framework/TestEnvironmentDefinition.d.ts'
import type { TestEnvironmentDefinition$Activation } from '../../../../net/minecraft/gametest/framework/TestEnvironmentDefinition$Activation.d.ts'
import type { ServerLevel } from '../../../../net/minecraft/server/level/ServerLevel.d.ts'
export class TestEnvironmentDefinition$AllOf extends Record implements TestEnvironmentDefinition<TestEnvironmentDefinition$Activation<Object>[]> {
    static CODEC: MapCodec<TestEnvironmentDefinition$AllOf>;
    static DIRECT_CODEC: Codec<TestEnvironmentDefinition<Object>>;
    static activate<T extends unknown>(paramenvironment: TestEnvironmentDefinition<T>, paramlevel: ServerLevel): TestEnvironmentDefinition$Activation<T>;
    static bootstrap(paramregistry: MapCodec<TestEnvironmentDefinition<Object>>[]): MapCodec<TestEnvironmentDefinition<Object>>;
    constructor(...defs: TestEnvironmentDefinition<Object>[])
    constructor(definitions: Holder<TestEnvironmentDefinition<Object>>[])
    // private definitions: Holder<TestEnvironmentDefinition<Object>>[];
    codec(): MapCodec<TestEnvironmentDefinition$AllOf>;
    definitions(): Holder<TestEnvironmentDefinition<Object>>[];
    equals(o: Object | null): boolean;
    hashCode(): number;
    setup(level: ServerLevel): TestEnvironmentDefinition$Activation<Object>[];
    teardown(level: ServerLevel, activations: TestEnvironmentDefinition$Activation<Object>[]): void;
    toString(): string;
}