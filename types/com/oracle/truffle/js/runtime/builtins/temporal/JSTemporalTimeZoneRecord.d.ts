import type { TruffleString } from '../../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class JSTemporalTimeZoneRecord extends Object {
    static create(paramz: boolean, paramoffsetString: TruffleString, paramname: TruffleString): JSTemporalTimeZoneRecord;
    private constructor(z: boolean, offsetString: TruffleString, name: TruffleString)
    readonly name: TruffleString;
    readonly offsetString: TruffleString;
    readonly z: boolean;
    getName(): TruffleString;
    getOffsetString(): TruffleString;
    isZ(): boolean;
}