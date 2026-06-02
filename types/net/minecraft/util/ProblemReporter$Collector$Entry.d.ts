import type { Record } from '../../../java/lang/Record.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { ProblemReporter$Collector } from '../../../net/minecraft/util/ProblemReporter$Collector.d.ts'
import type { ProblemReporter$Problem } from '../../../net/minecraft/util/ProblemReporter$Problem.d.ts'
export class ProblemReporter$Collector$Entry extends Record {
    private constructor(source: ProblemReporter$Collector, problem: ProblemReporter$Problem)
    // private problem: ProblemReporter$Problem;
    // private source: ProblemReporter$Collector;
    equals(o: Object | null): boolean;
    hashCode(): number;
    problem(): ProblemReporter$Problem;
    source(): ProblemReporter$Collector;
    toString(): string;
}