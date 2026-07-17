import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { StringReader } from '../../../../../com/mojang/brigadier/StringReader.d.ts'
import type { Dynamic2CommandExceptionType } from '../../../../../com/mojang/brigadier/exceptions/Dynamic2CommandExceptionType.d.ts'
import type { Dynamic3CommandExceptionType } from '../../../../../com/mojang/brigadier/exceptions/Dynamic3CommandExceptionType.d.ts'
import type { DynamicCommandExceptionType } from '../../../../../com/mojang/brigadier/exceptions/DynamicCommandExceptionType.d.ts'
import type { SimpleCommandExceptionType } from '../../../../../com/mojang/brigadier/exceptions/SimpleCommandExceptionType.d.ts'
import type { Suggestions } from '../../../../../com/mojang/brigadier/suggestion/Suggestions.d.ts'
import type { SuggestionsBuilder } from '../../../../../com/mojang/brigadier/suggestion/SuggestionsBuilder.d.ts'
import type { Either } from '../../../../../com/mojang/datafixers/util/Either.d.ts'
import type { CompletableFuture } from '../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../java/lang/Comparable.d.ts'
import type { BlockStateParser$BlockResult } from '../../../../../net/minecraft/commands/arguments/blocks/BlockStateParser$BlockResult.d.ts'
import type { BlockStateParser$TagResult } from '../../../../../net/minecraft/commands/arguments/blocks/BlockStateParser$TagResult.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { HolderLookup } from '../../../../../net/minecraft/core/HolderLookup.d.ts'
import type { CompoundTag } from '../../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Block } from '../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { StateDefinition } from '../../../../../net/minecraft/world/level/block/state/StateDefinition.d.ts'
import type { Property } from '../../../../../net/minecraft/world/level/block/state/properties/Property.d.ts'
export class BlockStateParser extends Object {
    static ERROR_DUPLICATE_PROPERTY: Dynamic2CommandExceptionType;
    static ERROR_EXPECTED_END_OF_PROPERTIES: SimpleCommandExceptionType;
    static ERROR_EXPECTED_VALUE: Dynamic2CommandExceptionType;
    static ERROR_INVALID_VALUE: Dynamic3CommandExceptionType;
    static ERROR_NO_TAGS_ALLOWED: SimpleCommandExceptionType;
    static ERROR_UNKNOWN_BLOCK: DynamicCommandExceptionType;
    static ERROR_UNKNOWN_PROPERTY: Dynamic2CommandExceptionType;
    static ERROR_UNKNOWN_TAG: DynamicCommandExceptionType;
    static fillSuggestions(paramblocks: HolderLookup<Block>, parambuilder: SuggestionsBuilder, paramforTesting: boolean, paramallowNbt: boolean): CompletableFuture<Suggestions>;
    static parseForBlock(paramblocks: HolderLookup<Block>, paramreader: StringReader, paramallowNbt: boolean): BlockStateParser$BlockResult;
    static parseForBlock(paramblocks: HolderLookup<Block>, paramvalue: string, paramallowNbt: boolean): BlockStateParser$BlockResult;
    static parseForTesting(paramblocks: HolderLookup<Block>, paramreader: StringReader, paramallowNbt: boolean): Either<BlockStateParser$BlockResult, BlockStateParser$TagResult>;
    static parseForTesting(paramblocks: HolderLookup<Block>, paramvalue: string, paramallowNbt: boolean): Either<BlockStateParser$BlockResult, BlockStateParser$TagResult>;
    static serialize(paramstate: BlockState): string;
    private constructor(blocks: HolderLookup<Block>, reader: StringReader, forTesting: boolean, allowNbt: boolean)
    // private allowNbt: boolean;
    // private blocks: HolderLookup<Block>;
    // private definition: StateDefinition<Block, BlockState>;
    // private forTesting: boolean;
    // private id: Identifier;
    // private nbt: CompoundTag;
    // private properties: JavaMap<Property<any>, Comparable<Object>>;
    // private reader: StringReader;
    // private state: BlockState;
    // private suggestions: (param0: SuggestionsBuilder) => CompletableFuture<Suggestions>;
    // private tag: Holder<Block>[];
    // private vagueProperties: JavaMap<string, string>;
    // private hasBlockEntity(): boolean;
    // private parse(): void;
    // private readBlock(): void;
    // private readNbt(): void;
    // private readProperties(): void;
    // private readTag(): void;
    // private readVagueProperties(): void;
    // private setValue<T extends Comparable<T>>(property: Property<T>, raw: string, start: number): void;
    // private suggestBlockIdOrTag(builder: SuggestionsBuilder): CompletableFuture<Suggestions>;
    // private suggestEquals(builder: SuggestionsBuilder): CompletableFuture<Suggestions>;
    // private suggestItem(builder: SuggestionsBuilder): CompletableFuture<Suggestions>;
    // private suggestNextPropertyOrEnd(builder: SuggestionsBuilder): CompletableFuture<Suggestions>;
    // private suggestOpenNbt(builder: SuggestionsBuilder): CompletableFuture<Suggestions>;
    // private suggestOpenPropertiesOrNbt(builder: SuggestionsBuilder): CompletableFuture<Suggestions>;
    // private suggestOpenVaguePropertiesOrNbt(builder: SuggestionsBuilder): CompletableFuture<Suggestions>;
    // private suggestPropertyName(builder: SuggestionsBuilder): CompletableFuture<Suggestions>;
    // private suggestPropertyNameOrEnd(builder: SuggestionsBuilder): CompletableFuture<Suggestions>;
    // private suggestTag(builder: SuggestionsBuilder): CompletableFuture<Suggestions>;
    // private suggestVaguePropertyName(builder: SuggestionsBuilder): CompletableFuture<Suggestions>;
    // private suggestVaguePropertyNameOrEnd(builder: SuggestionsBuilder): CompletableFuture<Suggestions>;
    // private suggestVaguePropertyValue(builder: SuggestionsBuilder, key: string): CompletableFuture<Suggestions>;
}