import type { Transition } from '../../../../../com/oracle/truffle/api/object/Transition.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Transition$ObjectFlagsTransition extends Transition {
    constructor(newFlags: number)
    readonly objectFlags: number;
    equals(other: Object | null): boolean;
    getObjectFlags(): number;
    hashCode(): number;
    isDirect(): boolean;
    toString(): string;
}