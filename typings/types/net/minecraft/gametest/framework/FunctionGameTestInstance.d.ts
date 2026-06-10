import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { GameTestHelper } from '../../../../net/minecraft/gametest/framework/GameTestHelper.d.ts'
import type { GameTestInstance } from '../../../../net/minecraft/gametest/framework/GameTestInstance.d.ts'
import type { TestData } from '../../../../net/minecraft/gametest/framework/TestData.d.ts'
import type { TestEnvironmentDefinition } from '../../../../net/minecraft/gametest/framework/TestEnvironmentDefinition.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../net/minecraft/network/chat/MutableComponent.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
export class FunctionGameTestInstance extends GameTestInstance {
    static CODEC: MapCodec<FunctionGameTestInstance>;
    static DIRECT_CODEC: Codec<GameTestInstance>;
    static bootstrap(paramregistry: MapCodec<GameTestInstance>[]): MapCodec<GameTestInstance>;
    constructor(function_: ResourceKey<(param0: GameTestHelper) => void>, info: TestData<Holder<TestEnvironmentDefinition<Object>>>)
    // private function: ResourceKey<(param0: GameTestHelper) => void>;
    codec(): MapCodec<FunctionGameTestInstance>;
    describe(): Component;
    // private function(): ResourceKey<(param0: GameTestHelper) => void>;
    run(helper: GameTestHelper): void;
    typeDescription(): MutableComponent;
}