import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class TimeZoneGenericNames$Pattern extends Enum<TimeZoneGenericNames$Pattern> {
    static FALLBACK_FORMAT: TimeZoneGenericNames$Pattern;
    static REGION_FORMAT: TimeZoneGenericNames$Pattern;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): TimeZoneGenericNames$Pattern;
    static values(): TimeZoneGenericNames$Pattern[];
    private constructor(key: string, defaultVal: string)
    // private _defaultVal: string;
    // private _key: string;
    defaultValue(): string;
    key(): string;
    name(): "REGION_FORMAT" | "FALLBACK_FORMAT";
}