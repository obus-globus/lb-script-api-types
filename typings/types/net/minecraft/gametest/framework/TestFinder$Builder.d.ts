import type { CommandContext } from '../../../../com/mojang/brigadier/context/CommandContext.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { UnaryOperator } from '../../../../java/util/function/UnaryOperator.d.ts'
import type { Stream } from '../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CommandSourceStack } from '../../../../net/minecraft/commands/CommandSourceStack.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { Holder$Reference } from '../../../../net/minecraft/core/Holder$Reference.d.ts'
import type { GameTestInstance } from '../../../../net/minecraft/gametest/framework/GameTestInstance.d.ts'
import type { TestFinder } from '../../../../net/minecraft/gametest/framework/TestFinder.d.ts'
import type { TestInstanceFinder } from '../../../../net/minecraft/gametest/framework/TestInstanceFinder.d.ts'
import type { TestPosFinder } from '../../../../net/minecraft/gametest/framework/TestPosFinder.d.ts'
export class TestFinder$Builder extends Object {
    constructor()
    // private structureBlockPosFinderWrapper: (param0: () => Stream<BlockPos>) => Object | null;
    // private testFinderWrapper: (param0: () => Stream<Holder$Reference<GameTestInstance>>) => Object | null;
    allNearby(sourceStack: CommandContext<CommandSourceStack>): TestFinder;
    // private build(source: CommandSourceStack, testInstanceFinder: () => Stream<Holder$Reference<GameTestInstance>>, testPosFinder: () => Stream<BlockPos>): TestFinder;
    byResourceSelection(sourceStack: CommandContext<CommandSourceStack>, holders: Holder$Reference<GameTestInstance>[]): TestFinder;
    createMultipleCopies(amount: number): TestFinder$Builder;
    failedTests(sourceStack: CommandContext<CommandSourceStack>): TestFinder;
    failedTests(sourceStack: CommandContext<CommandSourceStack>, onlyRequiredTests: boolean): TestFinder;
    lookedAt(sourceStack: CommandContext<CommandSourceStack>): TestFinder;
    nearest(sourceStack: CommandContext<CommandSourceStack>): TestFinder;
    radius(sourceStack: CommandContext<CommandSourceStack>, radius: number): TestFinder;
}