import type { Serializable } from '../../../../../../../../../java/io/Serializable.d.ts'
import type { BigInteger } from '../../../../../../../../../java/math/BigInteger.d.ts'
import type { Comparator } from '../../../../../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { ILits } from '../../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/minisat/core/ILits.d.ts'
import type { Undoable } from '../../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/minisat/core/Undoable.d.ts'
import type { Constr } from '../../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/Constr.d.ts'
import type { IVecInt } from '../../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/IVecInt.d.ts'
import type { Propagatable } from '../../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/Propagatable.d.ts'
import type { UnitPropagationListener } from '../../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/UnitPropagationListener.d.ts'
export abstract class WatchPbLong extends Object implements Serializable, Undoable, Constr, Propagatable {
    static TAUTOLOGY: Constr;
    static toLong(paramarg0: (Object | null)[]): number[];
    constructor()
    constructor(arg0: number[], arg1: BigInteger[], arg2: BigInteger, arg3: BigInteger)
    activity: number;
    // private coefs: number[];
    // private degree: number;
    // private learnt: boolean;
    // private levelBased: (param0: Object) => boolean;
    // private lits: number[];
    // private sumcoefs: number;
    // private voc: ILits;
    assertConstraint(arg0: UnitPropagationListener): void;
    calcReason(arg0: number, arg1: IVecInt): void;
    canBePropagatedMultipleTimes(): boolean;
    canBeSatisfiedByCountingLiterals(): boolean;
    computeLeftSide(): number;
    computeLeftSide(arg0: number[]): number;
    computePropagation(arg0: UnitPropagationListener): void;
    computeWatches(): void;
    equals(arg0: Object | null): boolean;
    get(arg0: number): number;
    getActivity(): number;
    hashCode(): number;
    incActivity(arg0: number): void;
    isSatisfiable(): boolean;
    isSatisfied(): boolean;
    learnt(): boolean;
    locked(): boolean;
    propagate(arg0: UnitPropagationListener, arg1: number): boolean;
    register(): void;
    remove(arg0: UnitPropagationListener): void;
    requiredNumberOfSatisfiedLiterals(): number;
    rescaleBy(arg0: number): void;
    selectionSort(arg0: number, arg1: number): void;
    setActivity(arg0: number): void;
    setLearnt(): void;
    simplify(): boolean;
    size(): number;
    slackConstraint(): number;
    sort(): void;
    sort(arg0: number, arg1: number): void;
    toConstraint(): Constr;
    toString(): string;
    undo(arg0: number): void;
}