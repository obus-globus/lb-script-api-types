import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { UnitPropagationListener } from '../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/UnitPropagationListener.d.ts'
export interface UnitClauseProvider extends Object{
    provideUnitClauses(arg0: UnitPropagationListener): void;
}