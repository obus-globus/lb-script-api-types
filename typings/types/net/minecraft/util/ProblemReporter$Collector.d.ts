import type { BiConsumer } from '../../../java/util/function/BiConsumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { ProblemReporter } from '../../../net/minecraft/util/ProblemReporter.d.ts'
import type { ProblemReporter$Collector$Entry } from '../../../net/minecraft/util/ProblemReporter$Collector$Entry.d.ts'
import type { ProblemReporter$PathElement } from '../../../net/minecraft/util/ProblemReporter$PathElement.d.ts'
import type { ProblemReporter$Problem } from '../../../net/minecraft/util/ProblemReporter$Problem.d.ts'
export class ProblemReporter$Collector extends Object implements ProblemReporter {
    static DISCARDING: ProblemReporter;
    static EMPTY_ROOT: () => kotlin.String;
    constructor()
    private constructor(parent: ProblemReporter$Collector, path: () => kotlin.String)
    constructor(root: () => kotlin.String)
    // private element: () => kotlin.String;
    // private parent: ProblemReporter$Collector;
    // private problems: ProblemReporter$Collector$Entry[];
    forChild(path: () => kotlin.String): ProblemReporter;
    forEach(output: (param0: string, param1: ProblemReporter$Problem) => void): void;
    getReport(): string;
    getTreeReport(): string;
    isEmpty(): boolean;
    report(problem: ProblemReporter$Problem): void;
}