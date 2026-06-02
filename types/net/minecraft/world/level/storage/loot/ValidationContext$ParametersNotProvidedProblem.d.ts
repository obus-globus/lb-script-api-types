import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ProblemReporter$Problem } from '../../../../../../net/minecraft/util/ProblemReporter$Problem.d.ts'
import type { ContextKey } from '../../../../../../net/minecraft/util/context/ContextKey.d.ts'
export class ValidationContext$ParametersNotProvidedProblem extends Record implements ProblemReporter$Problem {
    constructor(notProvided: ContextKey<Object>[])
    // private notProvided: ContextKey<Object>[];
    description(): string;
    equals(o: Object | null): boolean;
    hashCode(): number;
    notProvided(): ContextKey<Object>[];
    toString(): string;
}