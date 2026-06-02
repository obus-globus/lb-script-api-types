import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class GetDurationUnitOptionsNode$Unit extends Enum<GetDurationUnitOptionsNode$Unit> {
    static DAYS: GetDurationUnitOptionsNode$Unit;
    static HOURS: GetDurationUnitOptionsNode$Unit;
    static MICROSECONDS: GetDurationUnitOptionsNode$Unit;
    static MILLISECONDS: GetDurationUnitOptionsNode$Unit;
    static MINUTES: GetDurationUnitOptionsNode$Unit;
    static MONTHS: GetDurationUnitOptionsNode$Unit;
    static NANOSECONDS: GetDurationUnitOptionsNode$Unit;
    static SECONDS: GetDurationUnitOptionsNode$Unit;
    static WEEKS: GetDurationUnitOptionsNode$Unit;
    static YEARS: GetDurationUnitOptionsNode$Unit;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): GetDurationUnitOptionsNode$Unit;
    static values(): (Object | null)[];
    private constructor(styleKey: TruffleString, displayKey: TruffleString)
    // private displayKey: TruffleString;
    // private styleKey: TruffleString;
    name(): "YEARS" | "MONTHS" | "WEEKS" | "DAYS" | "HOURS" | "MINUTES" | "SECONDS" | "MILLISECONDS" | "MICROSECONDS" | "NANOSECONDS";
}