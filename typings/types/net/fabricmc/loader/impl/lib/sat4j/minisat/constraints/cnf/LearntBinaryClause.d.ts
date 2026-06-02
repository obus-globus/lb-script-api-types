import type { BinaryClause } from '../../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/minisat/constraints/cnf/BinaryClause.d.ts'
import type { ILits } from '../../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/minisat/core/ILits.d.ts'
import type { Constr } from '../../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/Constr.d.ts'
import type { IVecInt } from '../../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/IVecInt.d.ts'
export class LearntBinaryClause extends BinaryClause {
    static TAUTOLOGY: Constr;
    constructor(arg0: IVecInt, arg1: ILits)
    incActivity(arg0: number): void;
    learnt(): boolean;
    setActivity(arg0: number): void;
    setLearnt(): void;
}