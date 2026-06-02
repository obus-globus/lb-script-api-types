import type { AtomicGroup } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/AtomicGroup.d.ts'
import type { BackReference } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/BackReference.d.ts'
import type { CharacterClass } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/CharacterClass.d.ts'
import type { Group } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/Group.d.ts'
import type { LookAheadAssertion } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/LookAheadAssertion.d.ts'
import type { LookBehindAssertion } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/LookBehindAssertion.d.ts'
import type { PositionAssertion } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/PositionAssertion.d.ts'
import type { RegexAST } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/RegexAST.d.ts'
import type { Sequence } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/Sequence.d.ts'
import type { DepthFirstTraversalRegexASTVisitor } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/visitors/DepthFirstTraversalRegexASTVisitor.d.ts'
export class CalcASTFlagsVisitor extends DepthFirstTraversalRegexASTVisitor {
    static run(paramast: RegexAST): void;
    constructor(ast: RegexAST)
    // private ast: RegexAST;
    leave(atomicGroup: AtomicGroup): void;
    leave(group: Group): void;
    leave(assertion: LookAheadAssertion): void;
    leave(assertion: LookBehindAssertion): void;
    visit(backReference: BackReference): void;
    visit(characterClass: CharacterClass): void;
    visit(assertion: LookAheadAssertion): void;
    visit(assertion: LookBehindAssertion): void;
    visit(assertion: PositionAssertion): void;
    visit(sequence: Sequence): void;
}