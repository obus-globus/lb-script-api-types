import type { Property } from '../../../../../com/oracle/truffle/api/object/Property.d.ts'
import type { Transition$PropertyTransition } from '../../../../../com/oracle/truffle/api/object/Transition$PropertyTransition.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class Transition$TypedPropertyTransition extends Transition$PropertyTransition {
    constructor(property: Property, locationOrType: Object)
    constructor(key: Object, flags: number, locationType: Object)
    readonly locationOrType: Object;
    equals(obj: Object | null): boolean;
    getLocationOrType(): Object;
    hashCode(): number;
    propertyToString(): string;
}