import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ResourceKey } from '../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { ProblemReporter$Problem } from '../../../../../../net/minecraft/util/ProblemReporter$Problem.d.ts'
export class ValidationContext$ReferenceNotAllowedProblem extends Record implements ProblemReporter$Problem {
    constructor(referenced: ResourceKey<Object>)
    // private referenced: ResourceKey<Object>;
    description(): string;
    equals(o: Object | null): boolean;
    hashCode(): number;
    referenced(): ResourceKey<Object>;
    toString(): string;
}