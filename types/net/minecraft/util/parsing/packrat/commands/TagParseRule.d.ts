import type { StringReader } from '../../../../../../com/mojang/brigadier/StringReader.d.ts'
import type { Dynamic } from '../../../../../../com/mojang/serialization/Dynamic.d.ts'
import type { DynamicOps } from '../../../../../../com/mojang/serialization/DynamicOps.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { TagParser } from '../../../../../../net/minecraft/nbt/TagParser.d.ts'
import type { ParseState } from '../../../../../../net/minecraft/util/parsing/packrat/ParseState.d.ts'
import type { Rule } from '../../../../../../net/minecraft/util/parsing/packrat/Rule.d.ts'
import type { Rule$RuleAction } from '../../../../../../net/minecraft/util/parsing/packrat/Rule$RuleAction.d.ts'
import type { Rule$SimpleRuleAction } from '../../../../../../net/minecraft/util/parsing/packrat/Rule$SimpleRuleAction.d.ts'
import type { Term } from '../../../../../../net/minecraft/util/parsing/packrat/Term.d.ts'
export class TagParseRule<T extends Object | number | string | boolean> extends Object implements Rule<StringReader, Dynamic<Object>> {
    static fromTerm(paramchild: Term<Object>, paramaction: (param0: Object | null) => Object | null): Rule<Object, Object>;
    static fromTerm(paramchild: Term<Object>, paramaction: (param0: Object | null) => Object | null): Rule<Object, Object>;
    constructor(ops: DynamicOps<T>)
    // private parser: TagParser<T>;
    parse(state: ParseState<StringReader>): Dynamic<T>;
}