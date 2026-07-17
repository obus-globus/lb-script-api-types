import type { Property } from '../../../../../com/oracle/truffle/api/object/Property.d.ts'
import type { Transition$PropertyTransition } from '../../../../../com/oracle/truffle/api/object/Transition$PropertyTransition.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class Transition$AbstractReplacePropertyTransition extends Transition$PropertyTransition {
    constructor(before: Property, after: Property)
    // private after: Property;
    equals(obj: Object | null): boolean;
    getPropertyAfter(): Property;
    getPropertyBefore(): Property;
    hashCode(): number;
    isWeak(): boolean;
    toString(): string;
}