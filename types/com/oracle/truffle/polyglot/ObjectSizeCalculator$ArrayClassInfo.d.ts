import type { ObjectSizeCalculator$ArrayMemoryLayout } from '../../../../com/oracle/truffle/polyglot/ObjectSizeCalculator$ArrayMemoryLayout.d.ts'
import type { ObjectSizeCalculator$CalculationState } from '../../../../com/oracle/truffle/polyglot/ObjectSizeCalculator$CalculationState.d.ts'
import type { ObjectSizeCalculator$ClassInfo } from '../../../../com/oracle/truffle/polyglot/ObjectSizeCalculator$ClassInfo.d.ts'
import type { ObjectSizeCalculator$ForcedStop } from '../../../../com/oracle/truffle/polyglot/ObjectSizeCalculator$ForcedStop.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ObjectSizeCalculator$ArrayClassInfo extends Object implements ObjectSizeCalculator$ClassInfo {
    constructor(clazz: Class<Object>)
    // private arrayMemoryLayout: ObjectSizeCalculator$ArrayMemoryLayout;
    // private isPrimitive: boolean;
    increaseByBaseSize(calculationState: ObjectSizeCalculator$CalculationState, obj: Object): void;
    visit(calculationState: ObjectSizeCalculator$CalculationState, obj: Object): ObjectSizeCalculator$ForcedStop;
}