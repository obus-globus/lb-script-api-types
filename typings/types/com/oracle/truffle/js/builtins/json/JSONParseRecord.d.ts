import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { EconomicMap } from '../../../../../../org/graalvm/collections/EconomicMap.d.ts'
export class JSONParseRecord extends Record {
    static forArray(paramvalue: Object): JSONParseRecord;
    static forLiteral(paramvalue: Object, paramsource: TruffleString): JSONParseRecord;
    static forObject(paramvalue: Object): JSONParseRecord;
    constructor(value: Object, source: TruffleString, elements: JSONParseRecord[], entries: EconomicMap<TruffleString, JSONParseRecord>)
    // private elements: JSONParseRecord[];
    // private entries: EconomicMap<TruffleString, JSONParseRecord>;
    // private source: TruffleString;
    // private value: Object;
    elements(): JSONParseRecord[];
    entries(): EconomicMap<TruffleString, JSONParseRecord>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    source(): TruffleString;
    toString(): string;
    value(): Object;
}