import type { BigInteger } from '../../../../../../../../java/math/BigInteger.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { AbstractPBDataStructureFactory } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/pb/constraints/AbstractPBDataStructureFactory.d.ts'
import type { AbstractPBDataStructureFactory$INormalizer } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/pb/constraints/AbstractPBDataStructureFactory$INormalizer.d.ts'
import type { ICardConstructor } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/pb/constraints/ICardConstructor.d.ts'
import type { IClauseConstructor } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/pb/constraints/IClauseConstructor.d.ts'
import type { IPBConstructor } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/pb/constraints/IPBConstructor.d.ts'
import type { Constr } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/Constr.d.ts'
import type { IVecInt } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/IVecInt.d.ts'
export abstract class AbstractPBClauseCardConstrDataStructure extends AbstractPBDataStructureFactory {
    static FOR_COMPETITION: AbstractPBDataStructureFactory$INormalizer;
    static NO_COMPETITION: AbstractPBDataStructureFactory$INormalizer;
    static sumOfCoefficients(paramarg0: (Object | null)[]): BigInteger;
    constructor(arg0: IClauseConstructor, arg1: ICardConstructor, arg2: IPBConstructor)
    // private icardc: ICardConstructor;
    // private iclausec: IClauseConstructor;
    // private ipbc: IPBConstructor;
    constraintFactory(arg0: number[], arg1: BigInteger[], arg2: BigInteger): Constr;
    constructCard(arg0: IVecInt, arg1: number): Constr;
    constructClause(arg0: IVecInt): Constr;
    constructLearntClause(arg0: IVecInt): Constr;
    constructPB(arg0: number[], arg1: BigInteger[], arg2: BigInteger): Constr;
    createCardinalityConstraint(arg0: IVecInt, arg1: number): Constr;
    createClause(arg0: IVecInt): Constr;
    createUnregisteredClause(arg0: IVecInt): Constr;
}