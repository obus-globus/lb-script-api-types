import type { StringReader } from '../../../../../../com/mojang/brigadier/StringReader.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ParseState } from '../../../../../../net/minecraft/util/parsing/packrat/ParseState.d.ts'
import type { Rule } from '../../../../../../net/minecraft/util/parsing/packrat/Rule.d.ts'
import type { Rule$RuleAction } from '../../../../../../net/minecraft/util/parsing/packrat/Rule$RuleAction.d.ts'
import type { Rule$SimpleRuleAction } from '../../../../../../net/minecraft/util/parsing/packrat/Rule$SimpleRuleAction.d.ts'
import type { Term } from '../../../../../../net/minecraft/util/parsing/packrat/Term.d.ts'
export class IdentifierParseRule extends Object implements Rule<StringReader, Identifier> {
    static INSTANCE: Rule<StringReader, Identifier>;
    static fromTerm(paramchild: Term<Object>, paramaction: (param0: Object | null) => Object | null): Rule<Object, Object>;
    static fromTerm(paramchild: Term<Object>, paramaction: (param0: Object | null) => Object | null): Rule<Object, Object>;
    private constructor()
    parse(state: ParseState<StringReader>): Identifier;
}