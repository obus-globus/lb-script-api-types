import type { AtomicGroup } from '../../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/AtomicGroup.d.ts'
import type { BackReference } from '../../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/BackReference.d.ts'
import type { CharacterClass } from '../../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/CharacterClass.d.ts'
import type { Group } from '../../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/Group.d.ts'
import type { LookAheadAssertion } from '../../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/LookAheadAssertion.d.ts'
import type { LookBehindAssertion } from '../../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/LookBehindAssertion.d.ts'
import type { PositionAssertion } from '../../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/PositionAssertion.d.ts'
import type { RegexASTNode } from '../../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/RegexASTNode.d.ts'
import type { Sequence } from '../../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/Sequence.d.ts'
import type { SubexpressionCall } from '../../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/SubexpressionCall.d.ts'
import type { RegexASTVisitor } from '../../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/visitors/RegexASTVisitor.d.ts'
import type { RegexASTVisitorIterable } from '../../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/visitors/RegexASTVisitorIterable.d.ts'
export abstract class DepthFirstTraversalRegexASTVisitor extends RegexASTVisitor {
    constructor()
    // private cur: RegexASTNode;
    // private done: boolean;
    // private reverse: boolean;
    // private root: RegexASTNode;
    // private advance(iterable: RegexASTVisitorIterable): boolean;
    // private advanceLeafNode(node: RegexASTNode): boolean;
    // private doAdvance(): boolean;
    done(): void;
    init(runRoot: RegexASTNode): void;
    isForward(): boolean;
    isReverse(): boolean;
    leave(atomicGroup: AtomicGroup): void;
    leave(group: Group): void;
    leave(assertion: LookAheadAssertion): void;
    leave(assertion: LookBehindAssertion): void;
    leave(sequence: Sequence): void;
    run(runRoot: RegexASTNode): void;
    // private run(runRoot: RegexASTNode, runReverse: boolean): void;
    runReverse(runRoot: RegexASTNode): void;
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