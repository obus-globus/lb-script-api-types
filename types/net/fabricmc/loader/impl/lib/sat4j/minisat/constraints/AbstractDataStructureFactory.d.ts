import type { Serializable } from '../../../../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { DataStructureFactory } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/minisat/core/DataStructureFactory.d.ts'
import type { ILits } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/minisat/core/ILits.d.ts'
import type { Learner } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/minisat/core/Learner.d.ts'
import type { Constr } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/Constr.d.ts'
import type { IVec } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/IVec.d.ts'
import type { IVecInt } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/IVecInt.d.ts'
import type { Propagatable } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/Propagatable.d.ts'
import type { UnitPropagationListener } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/UnitPropagationListener.d.ts'
export abstract class AbstractDataStructureFactory extends Object implements Serializable, DataStructureFactory {
    constructor()
    learner: Learner;
    // private lits: ILits;
    // private solver: UnitPropagationListener;
    // private tmp: IVec<Propagatable>;
    createCardinalityConstraint(arg0: IVecInt, arg1: number): Constr;
    createLits(): ILits;
    getVocabulary(): ILits;
    learnConstraint(arg0: Constr): void;
    reset(): void;
    setLearner(arg0: Learner): void;
    setUnitPropagationListener(arg0: UnitPropagationListener): void;
}