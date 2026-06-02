import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { TimeZoneNames$NameType } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/TimeZoneNames$NameType.d.ts'
export class TZDBTimeZoneNames$TZDBNames extends Object {
    static EMPTY_TZDBNAMES: TZDBTimeZoneNames$TZDBNames;
    private constructor(names: string[], parseRegions: string[])
    // private _names: string[];
    // private _parseRegions: string[];
    getName(type: TimeZoneNames$NameType): string;
    getParseRegions(): string[];
}