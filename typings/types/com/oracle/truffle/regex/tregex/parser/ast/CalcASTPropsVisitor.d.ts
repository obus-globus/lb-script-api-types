import type { CompilationBuffer } from '../../../../../../../com/oracle/truffle/regex/tregex/buffer/CompilationBuffer.d.ts'
import type { AtomicGroup } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/AtomicGroup.d.ts'
import type { BackReference } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/BackReference.d.ts'
import type { CharacterClass } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/CharacterClass.d.ts'
import type { Group } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/Group.d.ts'
import type { LookAheadAssertion } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/LookAheadAssertion.d.ts'
import type { LookAroundAssertion } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/LookAroundAssertion.d.ts'
import type { LookBehindAssertion } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/LookBehindAssertion.d.ts'
import type { PositionAssertion } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/PositionAssertion.d.ts'
import type { QuantifiableTerm } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/QuantifiableTerm.d.ts'
import type { RegexAST } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/RegexAST.d.ts'
import type { RegexASTNode } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/RegexASTNode.d.ts'
import type { Sequence } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/Sequence.d.ts'
import type { SubexpressionCall } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/SubexpressionCall.d.ts'
import type { DepthFirstTraversalRegexASTVisitor } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/visitors/DepthFirstTraversalRegexASTVisitor.d.ts'
import type { EconomicMap } from '../../../../../../../org/graalvm/collections/EconomicMap.d.ts'
export class CalcASTPropsVisitor extends DepthFirstTraversalRegexASTVisitor {
    static run(paramast: RegexAST, paramcompilationBuffer: CompilationBuffer): void;
    constructor(ast: RegexAST, compilationBuffer: CompilationBuffer)
    // private ast: RegexAST;
    // private captureGroupsMaxWidth: number[];
    // private captureGroupsMinWidth: number[];
    // private compilationBuffer: CompilationBuffer;
    // private conditionGroups: EconomicMap<number, Group[]>;
    // private conditionalBackReferences: EconomicMap<number, Group[]>;
    // private checkConditionalBackReferences(): void;
    // private clearORFlags(node: RegexASTNode): void;
    init(runRoot: RegexASTNode): void;
    leave(atomicGroup: AtomicGroup): void;
    leave(group: Group): void;
    leave(assertion: LookAheadAssertion): void;
    leave(assertion: LookBehindAssertion): void;
    leave(sequence: Sequence): void;
    // private leaveLookAroundAssertion(assertion: LookAroundAssertion): void;
    // private registerConditionGroupsInLookAheadAssertions(): void;
    // private setQuantifierIndex(term: QuantifiableTerm): void;
    // private setZeroWidthQuantifierIndex(term: QuantifiableTerm): void;
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