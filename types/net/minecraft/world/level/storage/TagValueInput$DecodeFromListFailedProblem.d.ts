import type { DataResult$Error } from '../../../../../com/mojang/serialization/DataResult$Error.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Tag } from '../../../../../net/minecraft/nbt/Tag.d.ts'
import type { ProblemReporter$Problem } from '../../../../../net/minecraft/util/ProblemReporter$Problem.d.ts'
export class TagValueInput$DecodeFromListFailedProblem extends Record implements ProblemReporter$Problem {
    // private error: DataResult$Error<Object>;
    // private index: number;
    // private name: string;
    // private tag: Tag;
    description(): string;
    equals(o: Object | null): boolean;
    error(): DataResult$Error<Object>;
    hashCode(): number;
    index(): number;
    name(): string;
    tag(): Tag;
    toString(): string;
}