import type { PrintWriter } from '../../../../../../../java/io/PrintWriter.d.ts'
import type { PBSolverDecorator } from '../../../../../../../net/fabricmc/loader/impl/lib/sat4j/pb/PBSolverDecorator.d.ts'
import type { IOptimizationProblem } from '../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/IOptimizationProblem.d.ts'
import type { IVecInt } from '../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/IVecInt.d.ts'
import type { SolutionFoundListener } from '../../../../../../../net/fabricmc/loader/impl/lib/sat4j/tools/SolutionFoundListener.d.ts'
export class OptToPBSATAdapter extends PBSolverDecorator {
    constructor(arg0: IOptimizationProblem)
    constructor(arg0: IOptimizationProblem, arg1: SolutionFoundListener)
    // private assumps: IVecInt;
    // private begin: number;
    // private problem: IOptimizationProblem;
    // private sfl: SolutionFoundListener;
    isSatisfiable(): boolean;
    isSatisfiable(arg0: IVecInt): boolean;
    isSatisfiable(arg0: IVecInt, arg1: boolean): boolean;
    model(): number[];
    model(arg0: PrintWriter): number[];
    model(arg0: number): boolean;
}