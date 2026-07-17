import type { StringReader } from '../../../../../../com/mojang/brigadier/StringReader.d.ts'
import type { Dynamic } from '../../../../../../com/mojang/serialization/Dynamic.d.ts'
import type { DynamicOps } from '../../../../../../com/mojang/serialization/DynamicOps.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { TagParser } from '../../../../../../net/minecraft/nbt/TagParser.d.ts'
import type { ParseState } from '../../../../../../net/minecraft/util/parsing/packrat/ParseState.d.ts'
import type { Rule } from '../../../../../../net/minecraft/util/parsing/packrat/Rule.d.ts'
export class TagParseRule<T extends unknown> extends Object implements Rule<StringReader, Dynamic<Object>> {
    constructor(ops: DynamicOps<T>)
    // private parser: TagParser<T>;
    parse(state: ParseState<StringReader>): Dynamic<T>;
}