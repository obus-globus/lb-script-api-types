import type { PreCalculatedResultFactory } from '../../../../../../../../com/oracle/truffle/regex/result/PreCalculatedResultFactory.d.ts'
import type { AtomicGroup } from '../../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/AtomicGroup.d.ts'
import type { BackReference } from '../../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/BackReference.d.ts'
import type { CharacterClass } from '../../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/CharacterClass.d.ts'
import type { Group } from '../../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/Group.d.ts'
import type { LookAheadAssertion } from '../../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/LookAheadAssertion.d.ts'
import type { LookBehindAssertion } from '../../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/LookBehindAssertion.d.ts'
import type { PositionAssertion } from '../../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/PositionAssertion.d.ts'
import type { RegexAST } from '../../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/RegexAST.d.ts'
import type { Sequence } from '../../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/Sequence.d.ts'
import type { SubexpressionCall } from '../../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/SubexpressionCall.d.ts'
import type { DepthFirstTraversalRegexASTVisitor } from '../../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/visitors/DepthFirstTraversalRegexASTVisitor.d.ts'
import type { AbstractStringBuffer } from '../../../../../../../../com/oracle/truffle/regex/tregex/string/AbstractStringBuffer.d.ts'
export class PreCalcResultVisitor extends DepthFirstTraversalRegexASTVisitor {
    static createResultFactory(paramast: RegexAST): PreCalculatedResultFactory;
    static run(paramast: RegexAST, paramextractLiteral: boolean): PreCalcResultVisitor;
    private constructor(ast: RegexAST, extractLiteral: boolean)
    private constructor(ast: RegexAST, extractLiteral: boolean, unrollGroups: boolean, index: number, literal: AbstractStringBuffer, mask: AbstractStringBuffer, result: PreCalculatedResultFactory)
    // private ast: RegexAST;
    // private extractLiteral: boolean;
    // private groupUnroller: PreCalcResultVisitor;
    // private index: number;
    // private lastGroup: number;
    readonly literal: AbstractStringBuffer;
    readonly mask: AbstractStringBuffer;
    // private result: PreCalculatedResultFactory;
    // private unrollGroups: boolean;
    getLiteral(): AbstractStringBuffer;
    getMask(): AbstractStringBuffer;
    getResultFactory(): PreCalculatedResultFactory;
    isBooleanMatch(): boolean;
    leave(atomicGroup: AtomicGroup): void;
    leave(group: Group): void;
    leave(assertion: LookAheadAssertion): void;
    leave(assertion: LookBehindAssertion): void;
    leave(sequence: Sequence): void;
    visit(atomicGroup: AtomicGroup): void;
    visit(backReference: BackReference): void;
    visit(characterClass: CharacterClass): void;
    visit(group: Group): void;
    visit(assertion: LookAheadAssertion): void;
    visit(assertion: LookBehindAssertion): void;
    visit(assertion: PositionAssertion): void;
    visit(sequence: Sequence): void;
    visit(subexpressionCall: SubexpressionCall): void;
}