import type { Serializable } from '../../../../../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { ILits } from '../../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/minisat/core/ILits.d.ts'
import type { Undoable } from '../../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/minisat/core/Undoable.d.ts'
import type { Constr } from '../../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/Constr.d.ts'
import type { IVecInt } from '../../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/IVecInt.d.ts'
import type { MandatoryLiteralListener } from '../../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/MandatoryLiteralListener.d.ts'
import type { Propagatable } from '../../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/Propagatable.d.ts'
import type { UnitPropagationListener } from '../../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/UnitPropagationListener.d.ts'
export class MinWatchCard extends Object implements Serializable, Undoable, Constr, Propagatable {
    static TAUTOLOGY: Constr;
    static minWatchCardNew(paramarg0: UnitPropagationListener, paramarg1: ILits, paramarg2: IVecInt, paramarg3: boolean, paramarg4: number): Constr;
    constructor(arg0: ILits, arg1: IVecInt, arg2: boolean, arg3: number)
    // private degree: number;
    // private lits: number[];
    // private maxUnsatisfied: number;
    // private moreThan: boolean;
    // private savedindex: number;
    // private voc: ILits;
    // private watchCumul: number;
    assertConstraint(arg0: UnitPropagationListener): void;
    calcReason(arg0: number, arg1: IVecInt): void;
    canBePropagatedMultipleTimes(): boolean;
    canBeSatisfiedByCountingLiterals(): boolean;
    computePropagation(arg0: UnitPropagationListener): MinWatchCard;
    computeWatches(): void;
    equals(arg0: Object | null): boolean;
    get(arg0: number): number;
    getActivity(): number;
    getAssertionLevel(arg0: IVecInt, arg1: number): number;
    hashCode(): number;
    incActivity(arg0: number): void;
    isSatisfied(): boolean;
    learnt(): boolean;
    locked(): boolean;
    normalize(): void;
    propagate(arg0: UnitPropagationListener, arg1: number): boolean;
    propagatePI(arg0: MandatoryLiteralListener, arg1: number): boolean;
    register(): void;
    remove(arg0: UnitPropagationListener): void;
    requiredNumberOfSatisfiedLiterals(): number;
    rescaleBy(arg0: number): void;
    setActivity(arg0: number): void;
    setLearnt(): void;
    simplify(): boolean;
    size(): number;
    toConstraint(): Constr;
    toString(): string;
    undo(arg0: number): void;
}