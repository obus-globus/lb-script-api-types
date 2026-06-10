import type { StringReader } from '../../../../../com/mojang/brigadier/StringReader.d.ts'
import type { ArgumentType } from '../../../../../com/mojang/brigadier/arguments/ArgumentType.d.ts'
import type { CommandContext } from '../../../../../com/mojang/brigadier/context/CommandContext.d.ts'
import type { Suggestions } from '../../../../../com/mojang/brigadier/suggestion/Suggestions.d.ts'
import type { SuggestionsBuilder } from '../../../../../com/mojang/brigadier/suggestion/SuggestionsBuilder.d.ts'
import type { CompletableFuture } from '../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CommandBuildContext } from '../../../../../net/minecraft/commands/CommandBuildContext.d.ts'
import type { CommandSourceStack } from '../../../../../net/minecraft/commands/CommandSourceStack.d.ts'
import type { BlockPredicateArgument$Result } from '../../../../../net/minecraft/commands/arguments/blocks/BlockPredicateArgument$Result.d.ts'
import type { HolderLookup } from '../../../../../net/minecraft/core/HolderLookup.d.ts'
import type { Block } from '../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { BlockInWorld } from '../../../../../net/minecraft/world/level/block/state/pattern/BlockInWorld.d.ts'
export class BlockPredicateArgument extends Object implements ArgumentType<BlockPredicateArgument$Result> {
    static blockPredicate(paramcontext: CommandBuildContext): BlockPredicateArgument;
    static getBlockPredicate(paramcontext: CommandContext<CommandSourceStack>, paramname: string): (param0: BlockInWorld) => boolean;
    static parse(paramblocks: HolderLookup<Block>, paramreader: StringReader): BlockPredicateArgument$Result;
    constructor(context: CommandBuildContext)
    // private blocks: HolderLookup<Block>;
    getExamples(): string[];
    listSuggestions<S extends Object | number | string | boolean>(arg0: CommandContext<S>, arg1: SuggestionsBuilder): CompletableFuture<Suggestions>;
    listSuggestions<S extends Object | number | string | boolean>(context: CommandContext<S>, builder: SuggestionsBuilder): CompletableFuture<Suggestions>;
    parse<S extends Object | number | string | boolean>(arg0: StringReader, arg1: S): BlockPredicateArgument$Result;
    parse(reader: StringReader): BlockPredicateArgument$Result;
}