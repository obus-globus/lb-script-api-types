import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { GameTestHelper } from '../../../../net/minecraft/gametest/framework/GameTestHelper.d.ts'
import type { TestData } from '../../../../net/minecraft/gametest/framework/TestData.d.ts'
import type { TestEnvironmentDefinition } from '../../../../net/minecraft/gametest/framework/TestEnvironmentDefinition.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../net/minecraft/network/chat/MutableComponent.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
import type { Rotation } from '../../../../net/minecraft/world/level/block/Rotation.d.ts'
export abstract class GameTestInstance extends Object {
    static DIRECT_CODEC: Codec<GameTestInstance>;
    static bootstrap(paramregistry: MapCodec<GameTestInstance>[]): MapCodec<GameTestInstance>;
    constructor(info: TestData<Holder<TestEnvironmentDefinition<Object>>>)
    // private info: TestData<Holder<TestEnvironmentDefinition<Object>>>;
    batch(): Holder<TestEnvironmentDefinition<Object>>;
    codec(): MapCodec<GameTestInstance>;
    describe(): Component;
    describeInfo(): Component;
    describeType(): MutableComponent;
    descriptionRow(translationKey: string, value: string): MutableComponent;
    descriptionRow(translationKey: string, value: MutableComponent): MutableComponent;
    info(): TestData<Holder<TestEnvironmentDefinition<Object>>>;
    manualOnly(): boolean;
    maxAttempts(): number;
    maxTicks(): number;
    padding(): number;
    required(): boolean;
    requiredSuccesses(): number;
    rotation(): Rotation;
    run(helper: GameTestHelper): void;
    setupTicks(): number;
    skyAccess(): boolean;
    structure(): Identifier;
    typeDescription(): MutableComponent;
}