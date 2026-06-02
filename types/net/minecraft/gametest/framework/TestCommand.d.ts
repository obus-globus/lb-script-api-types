import type { CommandDispatcher } from '../../../../com/mojang/brigadier/CommandDispatcher.d.ts'
import type { CommandContext } from '../../../../com/mojang/brigadier/context/CommandContext.d.ts'
import type { Suggestions } from '../../../../com/mojang/brigadier/suggestion/Suggestions.d.ts'
import type { SuggestionsBuilder } from '../../../../com/mojang/brigadier/suggestion/SuggestionsBuilder.d.ts'
import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CommandBuildContext } from '../../../../net/minecraft/commands/CommandBuildContext.d.ts'
import type { CommandSourceStack } from '../../../../net/minecraft/commands/CommandSourceStack.d.ts'
import type { GameTestRunner } from '../../../../net/minecraft/gametest/framework/GameTestRunner.d.ts'
export class TestCommand extends Object {
    static TEST_FULL_SEARCH_RADIUS: number;
    static TEST_NEARBY_SEARCH_RADIUS: number;
    static VERIFY_TEST_BATCH_SIZE: number;
    static VERIFY_TEST_GRID_AXIS_SIZE: number;
    static register(paramdispatcher: CommandDispatcher<CommandSourceStack>, paramcontext: CommandBuildContext): void;
    static suggestTestFunction(paramcontext: CommandContext<CommandSourceStack>, parambuilder: SuggestionsBuilder): CompletableFuture<Suggestions>;
    static trackAndStartRunner(paramsource: CommandSourceStack, paramrunner: GameTestRunner): number;
    constructor()
}