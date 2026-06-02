import type { ObjectSizeCalculator$CalculationState } from '../../../../com/oracle/truffle/polyglot/ObjectSizeCalculator$CalculationState.d.ts'
import type { ObjectSizeCalculator$ForcedStop } from '../../../../com/oracle/truffle/polyglot/ObjectSizeCalculator$ForcedStop.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ObjectSizeCalculator$ClassInfo extends Object{
    increaseByBaseSize(calculationState: ObjectSizeCalculator$CalculationState, obj: Object): void;
    visit(calculationState: ObjectSizeCalculator$CalculationState, obj: Object): ObjectSizeCalculator$ForcedStop;
}