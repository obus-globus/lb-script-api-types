import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Constr } from '../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/Constr.d.ts'
import type { MandatoryLiteralListener } from '../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/MandatoryLiteralListener.d.ts'
import type { UnitPropagationListener } from '../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/UnitPropagationListener.d.ts'
export interface Propagatable extends Object{
    propagate(arg0: UnitPropagationListener, arg1: number): boolean;
    propagatePI(arg0: MandatoryLiteralListener, arg1: number): boolean;
    toConstraint(): Constr;
}