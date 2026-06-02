import type { Property } from '../../../../../com/oracle/truffle/api/object/Property.d.ts'
import type { Transition$TypedPropertyTransition } from '../../../../../com/oracle/truffle/api/object/Transition$TypedPropertyTransition.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Transition$RemovePropertyTransition extends Transition$TypedPropertyTransition {
    constructor(property: Property, locationOrType: Object, direct: boolean)
    readonly direct: boolean;
    isDirect(): boolean;
    toString(): string;
}