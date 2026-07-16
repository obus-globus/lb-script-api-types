import type { BigInteger } from '../../../../../../../../java/math/BigInteger.d.ts'
import type { AbstractPBClauseCardConstrDataStructure } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/pb/constraints/AbstractPBClauseCardConstrDataStructure.d.ts'
import type { AbstractPBDataStructureFactory$INormalizer } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/pb/constraints/AbstractPBDataStructureFactory$INormalizer.d.ts'
export class CompetResolutionPBLongMixedWLClauseCardConstrDataStructure extends AbstractPBClauseCardConstrDataStructure {
    static FOR_COMPETITION: AbstractPBDataStructureFactory$INormalizer;
    static NO_COMPETITION: AbstractPBDataStructureFactory$INormalizer;
    static sumOfCoefficients(paramarg0: BigInteger[]): BigInteger;
    constructor()
}