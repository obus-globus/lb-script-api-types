import type { BigInteger } from '../../../../../../../../java/math/BigInteger.d.ts'
import type { AbstractDataStructureFactory } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/minisat/constraints/AbstractDataStructureFactory.d.ts'
import type { ILits } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/minisat/core/ILits.d.ts'
import type { AbstractPBDataStructureFactory$INormalizer } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/pb/constraints/AbstractPBDataStructureFactory$INormalizer.d.ts'
import type { PBDataStructureFactory } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/pb/core/PBDataStructureFactory.d.ts'
import type { Constr } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/Constr.d.ts'
import type { IVec } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/IVec.d.ts'
import type { IVecInt } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/IVecInt.d.ts'
export abstract class AbstractPBDataStructureFactory extends AbstractDataStructureFactory implements PBDataStructureFactory {
    static FOR_COMPETITION: AbstractPBDataStructureFactory$INormalizer;
    static NO_COMPETITION: AbstractPBDataStructureFactory$INormalizer;
    constructor()
    // private norm: AbstractPBDataStructureFactory$INormalizer;
    constraintFactory(arg0: number[], arg1: BigInteger[], arg2: BigInteger): Constr;
    createCardinalityConstraint(arg0: IVecInt, arg1: number): Constr;
    createClause(arg0: IVecInt): Constr;
    createLits(): ILits;
    createPseudoBooleanConstraint(arg0: IVecInt, arg1: IVec<BigInteger>, arg2: boolean, arg3: BigInteger): Constr;
    createUnregisteredClause(arg0: IVecInt): Constr;
    getNormalizer(): AbstractPBDataStructureFactory$INormalizer;
}