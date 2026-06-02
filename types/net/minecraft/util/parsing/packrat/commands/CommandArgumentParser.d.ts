import type { StringReader } from '../../../../../../com/mojang/brigadier/StringReader.d.ts'
import type { DynamicCommandExceptionType } from '../../../../../../com/mojang/brigadier/exceptions/DynamicCommandExceptionType.d.ts'
import type { Suggestions } from '../../../../../../com/mojang/brigadier/suggestion/Suggestions.d.ts'
import type { SuggestionsBuilder } from '../../../../../../com/mojang/brigadier/suggestion/SuggestionsBuilder.d.ts'
import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { DynamicOps } from '../../../../../../com/mojang/serialization/DynamicOps.d.ts'
import type { CompletableFuture } from '../../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface CommandArgumentParser<T extends Object | number | string | boolean> extends Object{
    mapResult(mapper: (param0: T) => S): CommandArgumentParser<S>;
    parseForCommands(reader: StringReader): T;
    parseForSuggestions(suggestionsBuilder: SuggestionsBuilder): CompletableFuture<Suggestions>;
    withCodec(ops: DynamicOps<O>, valueParser: CommandArgumentParser<O>, codec: Codec<T>, exceptionType: DynamicCommandExceptionType): CommandArgumentParser<T>;
}