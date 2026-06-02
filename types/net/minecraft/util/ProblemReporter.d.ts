import type { Object } from '../../../java/lang/Object.d.ts'
import type { ProblemReporter$PathElement } from '../../../net/minecraft/util/ProblemReporter$PathElement.d.ts'
import type { ProblemReporter$Problem } from '../../../net/minecraft/util/ProblemReporter$Problem.d.ts'
export interface ProblemReporter extends Object{
    forChild(path: () => kotlin.String): ProblemReporter;
    report(problem: ProblemReporter$Problem): void;
}