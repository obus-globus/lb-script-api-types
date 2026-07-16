import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class BasicTimeZone$LocalOption extends Enum<BasicTimeZone$LocalOption> {
    static DAYLIGHT_FORMER: BasicTimeZone$LocalOption;
    static DAYLIGHT_LATTER: BasicTimeZone$LocalOption;
    static FORMER: BasicTimeZone$LocalOption;
    static LATTER: BasicTimeZone$LocalOption;
    static STANDARD_FORMER: BasicTimeZone$LocalOption;
    static STANDARD_LATTER: BasicTimeZone$LocalOption;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): BasicTimeZone$LocalOption;
    static values(): BasicTimeZone$LocalOption[];
    private constructor(flagVal: number)
    // private flagVal: number;
    name(): "FORMER" | "LATTER" | "STANDARD_FORMER" | "STANDARD_LATTER" | "DAYLIGHT_FORMER" | "DAYLIGHT_LATTER";
}