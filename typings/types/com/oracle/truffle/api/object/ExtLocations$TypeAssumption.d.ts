import type { AbstractAssumption } from '../../../../../com/oracle/truffle/api/impl/AbstractAssumption.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ExtLocations$TypeAssumption extends Object {
    constructor(assumption: AbstractAssumption, type: Class<Object>, nonNull: boolean)
    readonly assumption: AbstractAssumption;
    // private nonNull: boolean;
    // private type: Class<Object>;
    getAssumption(): AbstractAssumption;
    toString(): string;
}