import type { TimeZoneNames$NameType } from '../../../../com/ibm/icu/text/TimeZoneNames$NameType.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class TZDBTimeZoneNames$TZDBNames extends Object {
    static EMPTY_TZDBNAMES: TZDBTimeZoneNames$TZDBNames;
    private constructor(arg0: string[], arg1: string[])
    // private _names: string[];
    // private _parseRegions: string[];
    getName(arg0: TimeZoneNames$NameType): string;
    getParseRegions(): string[];
}