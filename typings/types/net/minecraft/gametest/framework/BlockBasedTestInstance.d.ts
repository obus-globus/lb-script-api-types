import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { GameTestHelper } from '../../../../net/minecraft/gametest/framework/GameTestHelper.d.ts'
import type { GameTestInstance } from '../../../../net/minecraft/gametest/framework/GameTestInstance.d.ts'
import type { TestData } from '../../../../net/minecraft/gametest/framework/TestData.d.ts'
import type { TestEnvironmentDefinition } from '../../../../net/minecraft/gametest/framework/TestEnvironmentDefinition.d.ts'
import type { MutableComponent } from '../../../../net/minecraft/network/chat/MutableComponent.d.ts'
import type { TestBlockEntity } from '../../../../net/minecraft/world/level/block/entity/TestBlockEntity.d.ts'
import type { TestBlockMode } from '../../../../net/minecraft/world/level/block/state/properties/TestBlockMode.d.ts'
export class BlockBasedTestInstance extends GameTestInstance {
    static CODEC: MapCodec<BlockBasedTestInstance>;
    static DIRECT_CODEC: Codec<GameTestInstance>;
    static bootstrap(paramregistry: MapCodec<GameTestInstance>[]): MapCodec<GameTestInstance>;
    constructor(testData: TestData<Holder<TestEnvironmentDefinition<Object>>>)
    codec(): MapCodec<BlockBasedTestInstance>;
    // private findStartBlock(helper: GameTestHelper): BlockPos;
    // private findTestBlocks(helper: GameTestHelper, mode: TestBlockMode): BlockPos[];
    // private forAllTriggeredTestBlocks(helper: GameTestHelper, mode: TestBlockMode, action: (param0: TestBlockEntity) => void): void;
    run(helper: GameTestHelper): void;
    typeDescription(): MutableComponent;
}