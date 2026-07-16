import type { BigInteger } from '../../../../../../../../../java/math/BigInteger.d.ts'
import type { ILits } from '../../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/minisat/core/ILits.d.ts'
import type { WatchPbLong } from '../../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/pb/constraints/pb/WatchPbLong.d.ts'
import type { Constr } from '../../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/Constr.d.ts'
import type { IVecInt } from '../../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/IVecInt.d.ts'
import type { MandatoryLiteralListener } from '../../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/MandatoryLiteralListener.d.ts'
import type { UnitPropagationListener } from '../../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/UnitPropagationListener.d.ts'
export class MaxWatchPbLong extends WatchPbLong {
    static TAUTOLOGY: Constr;
    static normalizedMaxWatchPbNew(paramarg0: UnitPropagationListener, paramarg1: ILits, paramarg2: number[], paramarg3: BigInteger[], paramarg4: BigInteger, paramarg5: BigInteger): MaxWatchPbLong;
    static toLong(paramarg0: BigInteger[]): number[];
    private constructor(arg0: ILits, arg1: number[], arg2: BigInteger[], arg3: BigInteger, arg4: BigInteger)
    // private litToCoeffs: { [key: number]: number };
    // private watchCumul: number;
    computePropagation(arg0: UnitPropagationListener): void;
    computeWatches(): void;
    getAssertionLevel(arg0: IVecInt, arg1: number): number;
    propagate(arg0: UnitPropagationListener, arg1: number): boolean;
    propagatePI(arg0: MandatoryLiteralListener, arg1: number): boolean;
    remove(arg0: UnitPropagationListener): void;
    undo(arg0: number): void;
}