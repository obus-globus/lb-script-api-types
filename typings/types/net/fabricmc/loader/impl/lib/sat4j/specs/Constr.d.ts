import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { IConstr } from '../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/IConstr.d.ts'
import type { IVecInt } from '../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/IVecInt.d.ts'
import type { UnitPropagationListener } from '../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/UnitPropagationListener.d.ts'
export interface Constr extends Object, IConstr{
    assertConstraint(arg0: UnitPropagationListener): void;
    calcReason(arg0: number, arg1: IVecInt): void;
    canBePropagatedMultipleTimes(): boolean;
    canBeSatisfiedByCountingLiterals(): boolean;
    get(arg0: number): number;
    getActivity(): number;
    getAssertionLevel(arg0: IVecInt, arg1: number): number;
    incActivity(arg0: number): void;
    isSatisfied(): boolean;
    learnt(): boolean;
    locked(): boolean;
    register(): void;
    remove(arg0: UnitPropagationListener): void;
    requiredNumberOfSatisfiedLiterals(): number;
    rescaleBy(arg0: number): void;
    setActivity(arg0: number): void;
    setLearnt(): void;
    simplify(): boolean;
    size(): number;
}