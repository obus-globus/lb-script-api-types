import type { Transition } from '../../../../../com/oracle/truffle/api/object/Transition.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Transition$ObjectTypeTransition extends Transition {
    constructor(objectType: Object)
    readonly objectType: Object;
    equals(other: Object | null): boolean;
    getObjectType(): Object;
    hashCode(): number;
    isDirect(): boolean;
    toString(): string;
}