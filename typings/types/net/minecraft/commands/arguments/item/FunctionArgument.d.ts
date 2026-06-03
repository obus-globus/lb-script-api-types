import type { StringReader } from '../../../../../com/mojang/brigadier/StringReader.d.ts'
import type { ArgumentType } from '../../../../../com/mojang/brigadier/arguments/ArgumentType.d.ts'
import type { CommandContext } from '../../../../../com/mojang/brigadier/context/CommandContext.d.ts'
import type { Suggestions } from '../../../../../com/mojang/brigadier/suggestion/Suggestions.d.ts'
import type { SuggestionsBuilder } from '../../../../../com/mojang/brigadier/suggestion/SuggestionsBuilder.d.ts'
import type { Pair } from '../../../../../com/mojang/datafixers/util/Pair.d.ts'
import type { CompletableFuture } from '../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CommandSourceStack } from '../../../../../net/minecraft/commands/CommandSourceStack.d.ts'
import type { FunctionArgument$Result } from '../../../../../net/minecraft/commands/arguments/item/FunctionArgument$Result.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export class FunctionArgument extends Object implements ArgumentType<FunctionArgument$Result> {
    static functions(): FunctionArgument;
    static getFunctionCollection(paramcontext: CommandContext<CommandSourceStack>, paramname: string): Pair<Identifier, Object>;
    static getFunctionOrTag(paramcontext: CommandContext<CommandSourceStack>, paramname: string): Pair<Identifier, Object>;
    static getFunctions(paramcontext: CommandContext<CommandSourceStack>, paramname: string): E[];
    constructor()
    getExamples(): E[];
    getExamples(): E[];
    listSuggestions(arg0: CommandContext<S>, arg1: SuggestionsBuilder): CompletableFuture<Suggestions>;
    parse<T extends Object | number | string | boolean, S extends Object | number | string | boolean>(arg0: StringReader, arg1: S): T;
    parse(reader: StringReader): FunctionArgument$Result;
    parse<S extends Object | number | string | boolean>(arg0: StringReader, arg1: S): FunctionArgument$Result;
}