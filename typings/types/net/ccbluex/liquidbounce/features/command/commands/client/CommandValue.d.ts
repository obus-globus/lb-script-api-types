import type { CommandDispatcher } from '../../../../../../../com/mojang/brigadier/CommandDispatcher.d.ts'
import type { CommandContext } from '../../../../../../../com/mojang/brigadier/context/CommandContext.d.ts'
import type { SuggestionProvider } from '../../../../../../../com/mojang/brigadier/suggestion/SuggestionProvider.d.ts'
import type { Suggestions } from '../../../../../../../com/mojang/brigadier/suggestion/Suggestions.d.ts'
import type { SuggestionsBuilder } from '../../../../../../../com/mojang/brigadier/suggestion/SuggestionsBuilder.d.ts'
import type { CompletableFuture } from '../../../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Pair } from '../../../../../../../kotlin/Pair.d.ts'
import type { Sequence } from '../../../../../../../kotlin/sequences/Sequence.d.ts'
import type { CommandRegistrar } from '../../../../../../../net/ccbluex/liquidbounce/features/command/CommandRegistrar.d.ts'
import type { ClientCommandSource } from '../../../../../../../net/ccbluex/liquidbounce/features/command/brigadier/ClientCommandSource.d.ts'
import type { CommandValue$KeySegmentQuery } from '../../../../../../../net/ccbluex/liquidbounce/features/command/commands/client/CommandValue$KeySegmentQuery.d.ts'
/**
 * Value Command
 *
 * Allows you to change values by key path.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cc3ab309a7c1e7125c4a36b872e8efed54294ecc/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/CommandValue.kt#L43 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/CommandValue.kt:43}
 */
export class CommandValue extends Object implements CommandRegistrar {
    static INSTANCE: CommandValue;
    // private valueSuggestionProvider: (param0: CommandContext<ClientCommandSource>, param1: SuggestionsBuilder) => CompletableFuture<Suggestions>;
    // private addDefaultPrefixIfMissing(input: string): string;
    // private buildKeySegmentQuery(begin: string): CommandValue$KeySegmentQuery;
    // private countSegments(prefix: string): number;
    // private formatSuggestion(prefix: string, segment: string): string;
    // private keyPathSuggestionProvider(keyProvider: (param0: string) => Sequence<string>): (param0: CommandContext<ClientCommandSource>, param1: SuggestionsBuilder) => CompletableFuture<Suggestions>;
    register(dispatcher: CommandDispatcher<ClientCommandSource>): void;
    // private splitKeyPrefix(input: string): Pair<string, string>;
}