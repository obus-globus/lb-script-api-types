import type { Serializable } from '../../../../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export interface IPhaseSelectionStrategy extends Serializable, Object{
    assignLiteral(arg0: number): void;
    init(arg0: number): void;
    init(arg0: number, arg1: number): void;
    select(arg0: number): number;
    updateVar(arg0: number): void;
    updateVarAtDecisionLevel(arg0: number): void;
}