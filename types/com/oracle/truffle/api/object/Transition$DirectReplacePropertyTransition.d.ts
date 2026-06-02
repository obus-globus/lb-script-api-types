import type { Property } from '../../../../../com/oracle/truffle/api/object/Property.d.ts'
import type { Transition$AbstractReplacePropertyTransition } from '../../../../../com/oracle/truffle/api/object/Transition$AbstractReplacePropertyTransition.d.ts'
export class Transition$DirectReplacePropertyTransition extends Transition$AbstractReplacePropertyTransition {
    constructor(before: Property, after: Property)
    isDirect(): boolean;
}