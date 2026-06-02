import type { Stream } from '../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CommandSourceStack } from '../../../../net/minecraft/commands/CommandSourceStack.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { Holder$Reference } from '../../../../net/minecraft/core/Holder$Reference.d.ts'
import type { GameTestInstance } from '../../../../net/minecraft/gametest/framework/GameTestInstance.d.ts'
import type { TestFinder$Builder } from '../../../../net/minecraft/gametest/framework/TestFinder$Builder.d.ts'
import type { TestInstanceFinder } from '../../../../net/minecraft/gametest/framework/TestInstanceFinder.d.ts'
import type { TestPosFinder } from '../../../../net/minecraft/gametest/framework/TestPosFinder.d.ts'
export class TestFinder extends Object implements TestInstanceFinder, TestPosFinder {
    static builder(): TestFinder$Builder;
    private constructor(source: CommandSourceStack, testInstanceFinder: () => java.util.stream.Stream<unknown>, testPosFinder: () => java.util.stream.Stream<net.minecraft.core.BlockPos>)
    // private source: CommandSourceStack;
    // private testInstanceFinder: () => java.util.stream.Stream<unknown>;
    // private testPosFinder: () => java.util.stream.Stream<net.minecraft.core.BlockPos>;
    findTestPos(): Stream<BlockPos>;
    findTests(): Stream<Holder$Reference<GameTestInstance>>;
    source(): CommandSourceStack;
}