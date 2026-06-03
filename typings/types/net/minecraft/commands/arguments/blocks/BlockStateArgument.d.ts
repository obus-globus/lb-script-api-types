import type { StringReader } from '../../../../../com/mojang/brigadier/StringReader.d.ts'
import type { ArgumentType } from '../../../../../com/mojang/brigadier/arguments/ArgumentType.d.ts'
import type { CommandContext } from '../../../../../com/mojang/brigadier/context/CommandContext.d.ts'
import type { Suggestions } from '../../../../../com/mojang/brigadier/suggestion/Suggestions.d.ts'
import type { SuggestionsBuilder } from '../../../../../com/mojang/brigadier/suggestion/SuggestionsBuilder.d.ts'
import type { CompletableFuture } from '../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CommandBuildContext } from '../../../../../net/minecraft/commands/CommandBuildContext.d.ts'
import type { CommandSourceStack } from '../../../../../net/minecraft/commands/CommandSourceStack.d.ts'
import type { BlockInput } from '../../../../../net/minecraft/commands/arguments/blocks/BlockInput.d.ts'
import type { HolderLookup } from '../../../../../net/minecraft/core/HolderLookup.d.ts'
import type { Block } from '../../../../../net/minecraft/world/level/block/Block.d.ts'
export class BlockStateArgument extends Object implements ArgumentType<BlockInput> {
    static block(paramcontext: CommandBuildContext): BlockStateArgument;
    static getBlock(paramcontext: CommandContext<CommandSourceStack>, paramname: string): BlockInput;
    constructor(context: CommandBuildContext)
    // private blocks: HolderLookup<Block>;
    getExamples(): E[];
    getExamples(): E[];
    listSuggestions(arg0: CommandContext<S>, arg1: SuggestionsBuilder): CompletableFuture<Suggestions>;
    listSuggestions(context: CommandContext<S>, builder: SuggestionsBuilder): CompletableFuture<Suggestions>;
    parse<T extends Object | number | string | boolean, S extends Object | number | string | boolean>(arg0: StringReader, arg1: S): T;
    parse(reader: StringReader): BlockInput;
    parse<S extends Object | number | string | boolean>(arg0: StringReader, arg1: S): BlockInput;
}