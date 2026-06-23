import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { TagType } from '../../../../../net/minecraft/nbt/TagType.d.ts'
import type { ProblemReporter$Problem } from '../../../../../net/minecraft/util/ProblemReporter$Problem.d.ts'
export class TagValueInput$UnexpectedTypeProblem extends Record implements ProblemReporter$Problem {
    constructor(name: string, expected: TagType<any>, actual: TagType<any>)
    // private actual: TagType<any>;
    // private expected: TagType<any>;
    // private name: string;
    actual(): TagType<any>;
    description(): string;
    equals(o: Object | null): boolean;
    expected(): TagType<any>;
    hashCode(): number;
    name(): string;
    toString(): string;
}