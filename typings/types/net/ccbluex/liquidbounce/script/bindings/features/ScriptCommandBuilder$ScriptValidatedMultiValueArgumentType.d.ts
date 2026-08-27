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
 * Greedily consumes all remaining tokens, validating each one through the
 * script-provided `validate` function. The result is an {@link Array} of parsed values.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/04647c31fac71244593009964391c5075a4675ba/src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/features/ScriptCommandBuilder.kt#L311 | src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/features/ScriptCommandBuilder.kt:311}
 */
export class ScriptCommandBuilder$ScriptValidatedMultiValueArgumentType extends Object implements ArgumentType<Object[]> {
    constructor(null_: ScriptCommandBuilder, parameterName: string, validator: Value)
    // private parameterName: string;
    // private validator: Value;
    getExamples(): string[];
    listSuggestions<S extends unknown>(arg0: CommandContext<S>, arg1: SuggestionsBuilder): CompletableFuture<Suggestions>;
    parse<S extends unknown>(arg0: StringReader, arg1: S): Object[];
    parse(reader: StringReader): Object[];
}