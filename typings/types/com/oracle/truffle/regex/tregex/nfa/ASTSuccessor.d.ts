import type { TransitionBuilder } from '../../../../../../com/oracle/truffle/regex/tregex/automaton/TransitionBuilder.d.ts'
import type { CompilationBuffer } from '../../../../../../com/oracle/truffle/regex/tregex/buffer/CompilationBuffer.d.ts'
import type { ASTStep } from '../../../../../../com/oracle/truffle/regex/tregex/nfa/ASTStep.d.ts'
import type { ASTTransition } from '../../../../../../com/oracle/truffle/regex/tregex/nfa/ASTTransition.d.ts'
import type { ASTTransitionCanonicalizer } from '../../../../../../com/oracle/truffle/regex/tregex/nfa/ASTTransitionCanonicalizer.d.ts'
import type { RegexAST } from '../../../../../../com/oracle/truffle/regex/tregex/parser/ast/RegexAST.d.ts'
import type { Term } from '../../../../../../com/oracle/truffle/regex/tregex/parser/ast/Term.d.ts'
import type { JsonConvertible } from '../../../../../../com/oracle/truffle/regex/tregex/util/json/JsonConvertible.d.ts'
import type { JsonValue } from '../../../../../../com/oracle/truffle/regex/tregex/util/json/JsonValue.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ASTSuccessor extends Object implements JsonConvertible {
    constructor()
    constructor(initialTransition: ASTTransition)
    readonly initialTransition: ASTTransition;
    readonly lookAheads: ASTStep[];
    // private lookAroundsMerged: boolean;
    readonly lookBehinds: ASTStep[];
    // private mergedStates: TransitionBuilder<RegexAST, Term, ASTTransition>[];
    // private mergedTransitions: ASTTransition[];
    // private addAllIntersecting(canonicalizer: ASTTransitionCanonicalizer, state: TransitionBuilder<RegexAST, Term, ASTTransition>, lookAround: ASTStep, result: TransitionBuilder<RegexAST, Term, ASTTransition>[], compilationBuffer: CompilationBuffer): void;
    addLookBehinds(addLookBehinds: ASTStep[]): void;
    getInitialTransition(): ASTTransition;
    getInitialTransitionCharSet(compilationBuffer: CompilationBuffer): (Object | null)[];
    getMergedStates(canonicalizer: ASTTransitionCanonicalizer, compilationBuffer: CompilationBuffer): TransitionBuilder<RegexAST, Term, ASTTransition>[];
    // private hasLookArounds(): boolean;
    // private mergeLookArounds(canonicalizer: ASTTransitionCanonicalizer, compilationBuffer: CompilationBuffer): void;
    setInitialTransition(initialTransition: ASTTransition): void;
    setLookAheads(lookAheads: ASTStep[]): void;
    setLookBehinds(lookBehinds: ASTStep[]): void;
    toJson(): JsonValue;
}