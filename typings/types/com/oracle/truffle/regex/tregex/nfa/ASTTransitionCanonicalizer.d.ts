import type { StateTransitionCanonicalizer } from '../../../../../../com/oracle/truffle/regex/tregex/automaton/StateTransitionCanonicalizer.d.ts'
import type { TransitionBuilder } from '../../../../../../com/oracle/truffle/regex/tregex/automaton/TransitionBuilder.d.ts'
import type { ASTTransition } from '../../../../../../com/oracle/truffle/regex/tregex/nfa/ASTTransition.d.ts'
import type { RegexAST } from '../../../../../../com/oracle/truffle/regex/tregex/parser/ast/RegexAST.d.ts'
import type { Term } from '../../../../../../com/oracle/truffle/regex/tregex/parser/ast/Term.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ASTTransitionCanonicalizer extends StateTransitionCanonicalizer<RegexAST, Term, ASTTransition, TransitionBuilder<RegexAST, Term, ASTTransition>> {
    constructor(stateIndex: RegexAST, forward: boolean, prioritySensitive: boolean, booleanMatch: boolean)
    canMerge(a: TransitionBuilder<RegexAST, Term, ASTTransition>, b: TransitionBuilder<RegexAST, Term, ASTTransition>): boolean;
    createResultArray(size: number): TransitionBuilder<RegexAST, Term, ASTTransition>[];
    createTransitionArray(size: number): ASTTransition[];
    createTransitionBuilder(transitions: ASTTransition[], targetStateSet: Term[], matcherBuilder: (Object | null)[], constraints: number[], operations: number[]): TransitionBuilder<RegexAST, Term, ASTTransition>;
    shouldPruneAfterFinalState(): boolean;
}