import type { ObjectSizeCalculator$CalculationState } from '../../../../com/oracle/truffle/polyglot/ObjectSizeCalculator$CalculationState.d.ts'
import type { ObjectSizeCalculator$ClassInfo } from '../../../../com/oracle/truffle/polyglot/ObjectSizeCalculator$ClassInfo.d.ts'
import type { ObjectSizeCalculator$ForcedStop } from '../../../../com/oracle/truffle/polyglot/ObjectSizeCalculator$ForcedStop.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ObjectSizeCalculator$StopClassInfo extends Object implements ObjectSizeCalculator$ClassInfo {
    constructor()
    increaseByBaseSize(calculationState: ObjectSizeCalculator$CalculationState, obj: Object): void;
    visit(calculationState: ObjectSizeCalculator$CalculationState, obj: Object): ObjectSizeCalculator$ForcedStop;
}