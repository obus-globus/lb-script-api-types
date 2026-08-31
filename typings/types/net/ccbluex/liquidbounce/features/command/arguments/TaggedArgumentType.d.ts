import type { StringReader } from '../../../../../../com/mojang/brigadier/StringReader.d.ts'
import type { ArgumentType } from '../../../../../../com/mojang/brigadier/arguments/ArgumentType.d.ts'
import type { CommandContext } from '../../../../../../com/mojang/brigadier/context/CommandContext.d.ts'
import type { Suggestions } from '../../../../../../com/mojang/brigadier/suggestion/Suggestions.d.ts'
import type { SuggestionsBuilder } from '../../../../../../com/mojang/brigadier/suggestion/SuggestionsBuilder.d.ts'
import type { CompletableFuture } from '../../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Tagged } from '../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { TaggedArgumentType$Companion } from '../../../../../../net/ccbluex/liquidbounce/features/command/arguments/TaggedArgumentType$Companion.d.ts'
/**
 * Single-choice argument over an enum-like set of tagged values: the tag is matched case-insensitively.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e67fdf9b70131f478c5894cf9de1f2d4aa7a95ce/src/main/kotlin/net/ccbluex/liquidbounce/features/command/arguments/ArgumentTypes.kt#L104 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/arguments/ArgumentTypes.kt:104}
 */
export class TaggedArgumentType<T extends Tagged> extends Object implements ArgumentType<T> {
    static Companion: TaggedArgumentType$Companion;
    constructor(parameterName: string, values: T[], predicate: (param0: T) => boolean)
    // private parameterName: string;
    // private predicate: (param0: T) => boolean;
    // private values: T[];
    getExamples(): string[];
    listSuggestions<S extends unknown>(arg0: CommandContext<S>, arg1: SuggestionsBuilder): CompletableFuture<Suggestions>;
    listSuggestions<S extends unknown>(context: CommandContext<S>, builder: SuggestionsBuilder): CompletableFuture<Suggestions>;
    parse<S extends unknown>(arg0: StringReader, arg1: S): T;
    parse(reader: StringReader): T;
}