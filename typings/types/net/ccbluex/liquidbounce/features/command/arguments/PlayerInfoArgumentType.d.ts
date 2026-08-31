import type { StringReader } from '../../../../../../com/mojang/brigadier/StringReader.d.ts'
import type { ArgumentType } from '../../../../../../com/mojang/brigadier/arguments/ArgumentType.d.ts'
import type { CommandContext } from '../../../../../../com/mojang/brigadier/context/CommandContext.d.ts'
import type { Suggestions } from '../../../../../../com/mojang/brigadier/suggestion/Suggestions.d.ts'
import type { SuggestionsBuilder } from '../../../../../../com/mojang/brigadier/suggestion/SuggestionsBuilder.d.ts'
import type { CompletableFuture } from '../../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { PlayerInfo } from '../../../../../../net/minecraft/client/multiplayer/PlayerInfo.d.ts'
/**
 * Resolves a tab-list player by name at parse time: invalid names fail during parse instead of inside the handler,
 * and every consumer receives the same {@link PlayerInfo} instead of re-implementing the lookup.
 *
 * Suggestions are the online player names from the command source.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e67fdf9b70131f478c5894cf9de1f2d4aa7a95ce/src/main/kotlin/net/ccbluex/liquidbounce/features/command/arguments/PlayerInfoArgumentType.kt#L38 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/arguments/PlayerInfoArgumentType.kt:38}
 */
export class PlayerInfoArgumentType extends Object implements ArgumentType<PlayerInfo> {
    static INSTANCE: PlayerInfoArgumentType;
    getExamples(): string[];
    listSuggestions<S extends unknown>(arg0: CommandContext<S>, arg1: SuggestionsBuilder): CompletableFuture<Suggestions>;
    listSuggestions<S extends unknown>(context: CommandContext<S>, builder: SuggestionsBuilder): CompletableFuture<Suggestions>;
    parse<S extends unknown>(arg0: StringReader, arg1: S): PlayerInfo;
    parse(reader: StringReader): PlayerInfo;
}