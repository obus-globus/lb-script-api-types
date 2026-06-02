import type { BigInteger } from '../../../../../../../../../java/math/BigInteger.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
export interface IDataStructurePB extends Object{
    buildConstraintFromMapPb(arg0: number[], arg1: BigInteger[]): void;
    cuttingPlane(arg0: number[], arg1: BigInteger[], arg2: BigInteger): BigInteger;
    getDegree(): BigInteger;
    saturation(): BigInteger;
    size(): number;
}