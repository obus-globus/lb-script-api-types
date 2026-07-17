import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { OptimizedCallTarget } from '../../../../../com/oracle/truffle/runtime/OptimizedCallTarget.d.ts'
import type { StatisticsListener$TargetIntStatistics } from '../../../../../com/oracle/truffle/runtime/debug/StatisticsListener$TargetIntStatistics.d.ts'
import type { PrintWriter } from '../../../../../java/io/PrintWriter.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class StatisticsListener$IdentityStatistics<T extends unknown> extends Object {
    private constructor()
    // private elementCount: number;
    // private types: JavaMap<T, StatisticsListener$TargetIntStatistics>;
    accept(elements: T[], target: OptimizedCallTarget): void;
    // private normalize(): void;
    printStatistics(out: PrintWriter, toStringFunction: (param0: T) => string, onlyCount: boolean, normalize: boolean): void;
}