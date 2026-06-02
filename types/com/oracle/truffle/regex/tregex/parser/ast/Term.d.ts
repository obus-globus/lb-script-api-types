import type { AbstractState } from '../../../../../../../com/oracle/truffle/regex/tregex/automaton/AbstractState.d.ts'
import type { CompilationBuffer } from '../../../../../../../com/oracle/truffle/regex/tregex/buffer/CompilationBuffer.d.ts'
import type { ASTTransition } from '../../../../../../../com/oracle/truffle/regex/tregex/nfa/ASTTransition.d.ts'
import type { Group } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/Group.d.ts'
import type { RegexAST } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/RegexAST.d.ts'
import type { RegexASTNode } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/RegexASTNode.d.ts'
import type { RegexASTSubtreeRootNode } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/RegexASTSubtreeRootNode.d.ts'
export abstract class Term extends RegexASTNode implements AbstractState<Term, ASTTransition> {
    constructor()
    constructor(copy: Term)
    readonly seqIndex: number;
    copy(ast: RegexAST): Term;
    copyRecursive(ast: RegexAST, compilationBuffer: CompilationBuffer): Term;
    getQuantifiedParentGroup(): Group;
    getSeqIndex(): number;
    getSubTreeParent(): RegexASTSubtreeRootNode;
    setSeqIndex(seqIndex: number): void;
}