import type { StringReader } from '../../../../../../com/mojang/brigadier/StringReader.d.ts'
import type { ArgumentType } from '../../../../../../com/mojang/brigadier/arguments/ArgumentType.d.ts'
import type { CommandContext } from '../../../../../../com/mojang/brigadier/context/CommandContext.d.ts'
import type { Suggestions } from '../../../../../../com/mojang/brigadier/suggestion/Suggestions.d.ts'
import type { SuggestionsBuilder } from '../../../../../../com/mojang/brigadier/suggestion/SuggestionsBuilder.d.ts'
import type { CompletableFuture } from '../../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
/**
 * Greedy multi-value argument that parses every remaining token as a tagged value,
 * mirroring the legacy `enumChoice(...).vararg()` parameter (one token per value).
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cc3ab309a7c1e7125c4a36b872e8efed54294ecc/src/main/kotlin/net/ccbluex/liquidbounce/features/command/arguments/ArgumentTypes.kt#L188 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/arguments/ArgumentTypes.kt:188}
 */
export class MultiTaggedArgumentType<T extends unknown> extends Object implements ArgumentType<T[]> {
    constructor(parameterName: string, values: T[], tagOf: (param0: T) => string)
    // private parameterName: string;
    // private tagOf: (param0: T) => string;
    // private values: T[];
    getExamples(): string[];
    listSuggestions<S extends unknown>(arg0: CommandContext<S>, arg1: SuggestionsBuilder): CompletableFuture<Suggestions>;
    listSuggestions<S extends unknown>(context: CommandContext<S>, builder: SuggestionsBuilder): CompletableFuture<Suggestions>;
    parse<S extends unknown>(arg0: StringReader, arg1: S): T[];
    parse(reader: StringReader): T[];
}