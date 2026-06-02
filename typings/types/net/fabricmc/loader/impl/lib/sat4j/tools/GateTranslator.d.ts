import type { IConstr } from '../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/IConstr.d.ts'
import type { ISolver } from '../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/ISolver.d.ts'
import type { IVecInt } from '../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/IVecInt.d.ts'
import type { SolverDecorator } from '../../../../../../../net/fabricmc/loader/impl/lib/sat4j/tools/SolverDecorator.d.ts'
export class GateTranslator extends SolverDecorator<ISolver> {
    constructor(arg0: ISolver)
    gateFalse(arg0: number): IConstr;
    gateTrue(arg0: number): IConstr;
    // private processClause(arg0: IVecInt): IConstr;
}