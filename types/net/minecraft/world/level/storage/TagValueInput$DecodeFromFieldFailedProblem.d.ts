import type { DataResult$Error } from '../../../../../com/mojang/serialization/DataResult$Error.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Tag } from '../../../../../net/minecraft/nbt/Tag.d.ts'
import type { ProblemReporter$Problem } from '../../../../../net/minecraft/util/ProblemReporter$Problem.d.ts'
export class TagValueInput$DecodeFromFieldFailedProblem extends Record implements ProblemReporter$Problem {
    constructor(name: string, tag: Tag, error: DataResult$Error<Object>)
    // private error: DataResult$Error<Object>;
    // private name: string;
    // private tag: Tag;
    description(): string;
    equals(o: Object | null): boolean;
    error(): DataResult$Error<Object>;
    hashCode(): number;
    name(): string;
    tag(): Tag;
    toString(): string;
}