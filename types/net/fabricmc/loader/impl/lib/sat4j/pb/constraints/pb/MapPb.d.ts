import type { BigInteger } from '../../../../../../../../../java/math/BigInteger.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { AutoDivisionStrategy } from '../../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/pb/constraints/pb/AutoDivisionStrategy.d.ts'
import type { IDataStructurePB } from '../../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/pb/constraints/pb/IDataStructurePB.d.ts'
import type { InternalMapPBStructure } from '../../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/pb/constraints/pb/InternalMapPBStructure.d.ts'
export class MapPb extends Object implements IDataStructurePB {
    static TAUTOLOGY: IDataStructurePB;
    constructor(arg0: number)
    // private assertiveLiteral: number;
    // private autoDivisionStrategy: AutoDivisionStrategy;
    // private cpCardsReduction: number;
    degree: BigInteger;
    // private weightedLits: InternalMapPBStructure;
    buildConstraintFromMapPb(arg0: number[], arg1: BigInteger[]): void;
    changeCoef(arg0: number, arg1: BigInteger): void;
    cuttingPlane(arg0: number[], arg1: BigInteger[], arg2: BigInteger): BigInteger;
    cuttingPlane(arg0: number[], arg1: BigInteger[], arg2: BigInteger, arg3: BigInteger): BigInteger;
    // private cuttingPlaneStep(arg0: number, arg1: BigInteger): void;
    decreaseCoef(arg0: number, arg1: BigInteger): void;
    getDegree(): BigInteger;
    increaseCoef(arg0: number, arg1: BigInteger): void;
    removeCoef(arg0: number): void;
    saturation(): BigInteger;
    setCoef(arg0: number, arg1: BigInteger): void;
    size(): number;
    toString(): string;
}