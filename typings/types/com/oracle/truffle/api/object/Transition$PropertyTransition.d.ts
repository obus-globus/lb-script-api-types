import type { Property } from '../../../../../com/oracle/truffle/api/object/Property.d.ts'
import type { Transition } from '../../../../../com/oracle/truffle/api/object/Transition.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class Transition$PropertyTransition extends Transition {
    constructor(property: Property)
    constructor(key: Object, flags: number)
    // private flags: number;
    // private key: Object;
    readonly property: Property;
    equals(obj: Object | null): boolean;
    getProperty(): Property;
    getPropertyFlags(): number;
    getPropertyKey(): Object;
    hasConstantLocation(): boolean;
    hashCode(): number;
}