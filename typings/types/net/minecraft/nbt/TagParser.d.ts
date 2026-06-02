import type { StringReader } from '../../../com/mojang/brigadier/StringReader.d.ts'
import type { SimpleCommandExceptionType } from '../../../com/mojang/brigadier/exceptions/SimpleCommandExceptionType.d.ts'
import type { Codec } from '../../../com/mojang/serialization/Codec.d.ts'
import type { DynamicOps } from '../../../com/mojang/serialization/DynamicOps.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CompoundTag } from '../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { Grammar } from '../../../net/minecraft/util/parsing/packrat/commands/Grammar.d.ts'
export class TagParser<T extends Object | number | string | boolean> extends Object {
    static ELEMENT_SEPARATOR: string;
    static ERROR_EXPECTED_COMPOUND: SimpleCommandExceptionType;
    static ERROR_TRAILING_DATA: SimpleCommandExceptionType;
    static FLATTENED_CODEC: Codec<CompoundTag>;
    static LENIENT_CODEC: Codec<CompoundTag>;
    static NAME_VALUE_SEPARATOR: string;
    static create(paramops: DynamicOps<Object>): TagParser<Object>;
    static parseCompoundAsArgument(paramreader: StringReader): CompoundTag;
    static parseCompoundFully(paraminput: string): CompoundTag;
    private constructor(ops: DynamicOps<T>, grammar: Grammar<T>)
    // private grammar: Grammar<T>;
    readonly ops: DynamicOps<T>;
    getOps(): DynamicOps<T>;
    parseAsArgument(reader: StringReader): T;
    parseFully(reader: StringReader): T;
    parseFully(input: string): T;
}