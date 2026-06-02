import type { BigInteger } from '../../../../../../../../java/math/BigInteger.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { IPBSolver } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/pb/IPBSolver.d.ts'
import type { ObjectiveFunction } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/pb/ObjectiveFunction.d.ts'
import type { INegator } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/pb/tools/INegator.d.ts'
import type { ImplicationNamer } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/pb/tools/ImplicationNamer.d.ts'
import type { ImplicationRHS } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/pb/tools/ImplicationRHS.d.ts'
import type { WeightedObject } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/pb/tools/WeightedObject.d.ts'
import type { XplainPB } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/pb/tools/XplainPB.d.ts'
import type { IConstr } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/IConstr.d.ts'
import type { IVec } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/IVec.d.ts'
import type { IVecInt } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/IVecInt.d.ts'
import type { GateTranslator } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/tools/GateTranslator.d.ts'
export class DependencyHelper<T extends Object | number | string | boolean, C extends Object | number | string | boolean> extends Object {
    static BASIC_NEGATION: INegator;
    static NO_NEGATION: INegator;
    constructor(arg0: IPBSolver)
    constructor(arg0: IPBSolver, arg1: boolean)
    constructor(arg0: IPBSolver, arg1: boolean, arg2: boolean)
    // private canonicalOptFunction: boolean;
    // private descs: Map<IConstr, C>;
    // private explanationEnabled: boolean;
    // private gator: GateTranslator;
    // private mapToDimacs: Map<T, number>;
    // private mapToDomain: { [key: number]: T };
    readonly negator: INegator;
    // private objCoefs: IVec<BigInteger>;
    // private objFunction: ObjectiveFunction;
    // private objLiterals: IVecInt;
    readonly solver: IPBSolver;
    // private xplain: XplainPB;
    // private addProperly(arg0: T, arg1: BigInteger): void;
    atMost(arg0: number, arg1: T[]): ImplicationNamer<T, C>;
    clause(arg0: C, arg1: T[]): void;
    // private createObjectivetiveFunctionIfNeeded(arg0: number): void;
    getASolution(): E[];
    getIntValue(arg0: T): number;
    getIntValue(arg0: T, arg1: boolean): number;
    getSolver(): IPBSolver;
    hasASolution(): boolean;
    implication(arg0: T[]): ImplicationRHS<T, C>;
    reset(): void;
    setFalse(arg0: T, arg1: C): void;
    setNegator(arg0: INegator): void;
    setObjectiveFunction(arg0: WeightedObject<T>[]): void;
    setTrue(arg0: T, arg1: C): void;
    why(): C[];
}