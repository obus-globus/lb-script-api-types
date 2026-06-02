import type { ObjectSizeCalculator$CalculationState } from '../../../../com/oracle/truffle/polyglot/ObjectSizeCalculator$CalculationState.d.ts'
import type { ObjectSizeCalculator$ForcedStop } from '../../../../com/oracle/truffle/polyglot/ObjectSizeCalculator$ForcedStop.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ObjectSizeCalculator$ArrayElementsVisitor extends Object {
    constructor(array: Object[], alreadyVisited: Object[])
    // private alreadyVisited: Object[];
    // private array: Object[];
    visit(calculationState: ObjectSizeCalculator$CalculationState): ObjectSizeCalculator$ForcedStop;
}