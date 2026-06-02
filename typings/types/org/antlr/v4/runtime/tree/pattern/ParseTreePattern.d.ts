import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ParseTree } from '../../../../../../org/antlr/v4/runtime/tree/ParseTree.d.ts'
import type { ParseTreeMatch } from '../../../../../../org/antlr/v4/runtime/tree/pattern/ParseTreeMatch.d.ts'
import type { ParseTreePatternMatcher } from '../../../../../../org/antlr/v4/runtime/tree/pattern/ParseTreePatternMatcher.d.ts'
export class ParseTreePattern extends Object {
    constructor(arg0: ParseTreePatternMatcher, arg1: string, arg2: number, arg3: ParseTree)
    readonly matcher: ParseTreePatternMatcher;
    readonly pattern: string;
    readonly patternRuleIndex: number;
    readonly patternTree: ParseTree;
    findAll(arg0: ParseTree, arg1: string): ParseTreeMatch[];
    getMatcher(): ParseTreePatternMatcher;
    getPattern(): string;
    getPatternRuleIndex(): number;
    getPatternTree(): ParseTree;
    match(arg0: ParseTree): ParseTreeMatch;
    matches(arg0: ParseTree): boolean;
}