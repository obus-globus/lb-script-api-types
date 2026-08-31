import type { StringReader } from '../../../../../../com/mojang/brigadier/StringReader.d.ts'
import type { ArgumentType } from '../../../../../../com/mojang/brigadier/arguments/ArgumentType.d.ts'
import type { CommandContext } from '../../../../../../com/mojang/brigadier/context/CommandContext.d.ts'
import type { Suggestions } from '../../../../../../com/mojang/brigadier/suggestion/Suggestions.d.ts'
import type { SuggestionsBuilder } from '../../../../../../com/mojang/brigadier/suggestion/SuggestionsBuilder.d.ts'
import type { CompletableFuture } from '../../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ScriptCommandBuilder } from '../../../../../../net/ccbluex/liquidbounce/script/bindings/features/ScriptCommandBuilder.d.ts'
import type { Value } from '../../../../../../org/graalvm/polyglot/Value.d.ts'
/**
 * Validates a single token through the script-provided `validate` function.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e67fdf9b70131f478c5894cf9de1f2d4aa7a95ce/src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/features/ScriptCommandBuilder.kt#L287 | src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/features/ScriptCommandBuilder.kt:287}
 */
export class ScriptCommandBuilder$ScriptValidatedArgumentType extends Object implements ArgumentType<Object> {
    constructor(null_: ScriptCommandBuilder, parameterName: string, validator: Value)
    // private parameterName: string;
    // private validator: Value;
    getExamples(): string[];
    listSuggestions<S extends unknown>(arg0: CommandContext<S>, arg1: SuggestionsBuilder): CompletableFuture<Suggestions>;
    parse<S extends unknown>(arg0: StringReader, arg1: S): Object;
    parse(reader: StringReader): Object;
}