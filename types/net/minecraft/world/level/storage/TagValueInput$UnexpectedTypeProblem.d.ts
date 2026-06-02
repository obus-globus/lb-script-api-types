import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { TagType } from '../../../../../net/minecraft/nbt/TagType.d.ts'
import type { ProblemReporter$Problem } from '../../../../../net/minecraft/util/ProblemReporter$Problem.d.ts'
export class TagValueInput$UnexpectedTypeProblem extends Record implements ProblemReporter$Problem {
    constructor(name: string, expected: TagType<Object>, actual: TagType<Object>)
    // private actual: TagType<Object>;
    // private expected: TagType<Object>;
    // private name: string;
    actual(): TagType<Object>;
    description(): string;
    equals(o: Object | null): boolean;
    expected(): TagType<Object>;
    hashCode(): number;
    name(): string;
    toString(): string;
}