import type { JsonConvertible } from '../../../../../../../com/oracle/truffle/regex/tregex/util/json/JsonConvertible.d.ts'
import type { JsonValue } from '../../../../../../../com/oracle/truffle/regex/tregex/util/json/JsonValue.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class DFACaptureGroupPartialTransition$LastGroupUpdate extends Object implements JsonConvertible {
    constructor(targetArray: number, lastGroup: number)
    readonly lastGroup: number;
    readonly targetArray: number;
    equals(o: Object | null): boolean;
    getLastGroup(): number;
    getTargetArray(): number;
    hashCode(): number;
    toJson(): JsonValue;
}