import type { RegexOptions } from '../../../../../../../com/oracle/truffle/regex/RegexOptions.d.ts'
import type { Token$Quantifier } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/Token$Quantifier.d.ts'
import type { RegexAST } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/RegexAST.d.ts'
import type { RegexASTNode } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/RegexASTNode.d.ts'
import type { RegexASTSubtreeRootNode } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/RegexASTSubtreeRootNode.d.ts'
import type { Term } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/Term.d.ts'
export abstract class QuantifiableTerm extends Term {
    constructor()
    constructor(copy: QuantifiableTerm)
    readonly quantifier: Token$Quantifier;
    copy(ast: RegexAST): QuantifiableTerm;
    equalsSemantic(obj: RegexASTNode): boolean;
    equalsSemantic(obj: RegexASTNode, ignoreQuantifier: boolean): boolean;
    getQuantifier(): Token$Quantifier;
    getSubTreeParent(): RegexASTSubtreeRootNode;
    hasMin0Quantifier(): boolean;
    hasNotUnrolledQuantifier(): boolean;
    hasQuantifier(): boolean;
    isUnrollingCandidate(options: RegexOptions): boolean;
    quantifierEquals(o: QuantifiableTerm): boolean;
    quantifierToString(): string;
    setQuantifier(quantifier: Token$Quantifier): void;
}