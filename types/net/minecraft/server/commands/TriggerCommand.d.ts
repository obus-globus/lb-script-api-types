import type { CommandDispatcher } from '../../../../com/mojang/brigadier/CommandDispatcher.d.ts'
import type { Suggestions } from '../../../../com/mojang/brigadier/suggestion/Suggestions.d.ts'
import type { SuggestionsBuilder } from '../../../../com/mojang/brigadier/suggestion/SuggestionsBuilder.d.ts'
import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CommandSourceStack } from '../../../../net/minecraft/commands/CommandSourceStack.d.ts'
export class TriggerCommand extends Object {
    static register(paramdispatcher: CommandDispatcher<CommandSourceStack>): void;
    static suggestObjectives(paramsource: CommandSourceStack, parambuilder: SuggestionsBuilder): CompletableFuture<Suggestions>;
    constructor()
}