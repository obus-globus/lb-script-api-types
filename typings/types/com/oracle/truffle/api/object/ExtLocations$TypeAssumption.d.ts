import type { Assumption } from '../../../../../com/oracle/truffle/api/Assumption.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ExtLocations$TypeAssumption extends Object {
    constructor(assumption: Assumption, type: Class<Object>, nonNull: boolean)
    readonly assumption: Assumption;
    // private nonNull: boolean;
    // private type: Class<Object>;
    getAssumption(): Assumption;
    toString(): string;
}