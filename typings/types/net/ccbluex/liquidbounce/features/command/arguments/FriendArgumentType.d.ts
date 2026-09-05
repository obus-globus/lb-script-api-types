import type { StringReader } from '../../../../../../com/mojang/brigadier/StringReader.d.ts'
import type { ArgumentType } from '../../../../../../com/mojang/brigadier/arguments/ArgumentType.d.ts'
import type { CommandContext } from '../../../../../../com/mojang/brigadier/context/CommandContext.d.ts'
import type { Suggestions } from '../../../../../../com/mojang/brigadier/suggestion/Suggestions.d.ts'
import type { SuggestionsBuilder } from '../../../../../../com/mojang/brigadier/suggestion/SuggestionsBuilder.d.ts'
import type { CompletableFuture } from '../../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FriendManager$Friend } from '../../../../../../net/ccbluex/liquidbounce/features/misc/FriendManager$Friend.d.ts'
/**
 * Resolves a friend by name at parse time: unknown names fail during parse instead of
 * inside the handler (mirrors {@link PlayerInfoArgumentType}), and every consumer receives the
 * same {@link FriendManager.Friend} instead of re-implementing the lookup.
 *
 * Suggestions are the names on the friend list.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/64f9c02ca90d2728f0d1fffd459b622eb8239747/src/main/kotlin/net/ccbluex/liquidbounce/features/command/arguments/FriendArgumentType.kt#L35 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/arguments/FriendArgumentType.kt:35}
 */
export class FriendArgumentType extends Object implements ArgumentType<FriendManager$Friend> {
    static INSTANCE: FriendArgumentType;
    getExamples(): string[];
    listSuggestions<S extends unknown>(arg0: CommandContext<S>, arg1: SuggestionsBuilder): CompletableFuture<Suggestions>;
    listSuggestions<S extends unknown>(context: CommandContext<S>, builder: SuggestionsBuilder): CompletableFuture<Suggestions>;
    parse<S extends unknown>(arg0: StringReader, arg1: S): FriendManager$Friend;
    parse(reader: StringReader): FriendManager$Friend;
}