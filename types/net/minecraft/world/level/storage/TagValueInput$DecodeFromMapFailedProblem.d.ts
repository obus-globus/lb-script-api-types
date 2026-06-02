import type { DataResult$Error } from '../../../../../com/mojang/serialization/DataResult$Error.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ProblemReporter$Problem } from '../../../../../net/minecraft/util/ProblemReporter$Problem.d.ts'
export class TagValueInput$DecodeFromMapFailedProblem extends Record implements ProblemReporter$Problem {
    constructor(error: DataResult$Error<Object>)
    // private error: DataResult$Error<Object>;
    description(): string;
    equals(o: Object | null): boolean;
    error(): DataResult$Error<Object>;
    hashCode(): number;
    toString(): string;
}