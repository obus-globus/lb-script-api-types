import type { Property } from '../../../../../com/oracle/truffle/api/object/Property.d.ts'
import type { Transition$TypedPropertyTransition } from '../../../../../com/oracle/truffle/api/object/Transition$TypedPropertyTransition.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Transition$AddPropertyTransition extends Transition$TypedPropertyTransition {
    constructor(property: Property, locationOrType: Object)
    constructor(key: Object, flags: number, locationType: Object)
    isDirect(): boolean;
    toString(): string;
}