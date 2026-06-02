import type { Serializable } from '../../../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { IConstr } from '../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/IConstr.d.ts'
import type { ISolverService } from '../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/ISolverService.d.ts'
import type { Lbool } from '../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/Lbool.d.ts'
import type { RandomAccessModel } from '../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/RandomAccessModel.d.ts'
import type { UnitClauseConsumer } from '../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/UnitClauseConsumer.d.ts'
export interface SearchListener<S extends ISolverService> extends Serializable, Object, UnitClauseConsumer{
    adding(arg0: number): void;
    assuming(arg0: number): void;
    backjump(arg0: number): void;
    backtracking(arg0: number): void;
    beginLoop(): void;
    cleaning(): void;
    conflictFound(arg0: number): void;
    conflictFound(arg0: IConstr, arg1: number, arg2: number): void;
    delete(arg0: IConstr): void;
    end(arg0: Lbool): void;
    enqueueing(arg0: number, arg1: IConstr): void;
    init(arg0: S): void;
    learn(arg0: IConstr): void;
    propagating(arg0: number): void;
    restarting(): void;
    solutionFound(arg0: number[], arg1: RandomAccessModel): void;
    start(): void;
}