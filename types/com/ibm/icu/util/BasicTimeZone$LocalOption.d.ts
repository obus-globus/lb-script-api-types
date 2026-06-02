import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class BasicTimeZone$LocalOption extends Enum<BasicTimeZone$LocalOption> {
    static DAYLIGHT_FORMER: BasicTimeZone$LocalOption;
    static DAYLIGHT_LATTER: BasicTimeZone$LocalOption;
    static FORMER: BasicTimeZone$LocalOption;
    static LATTER: BasicTimeZone$LocalOption;
    static STANDARD_FORMER: BasicTimeZone$LocalOption;
    static STANDARD_LATTER: BasicTimeZone$LocalOption;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): BasicTimeZone$LocalOption;
    static values(): (Object | null)[];
    private constructor(arg2: number)
    // private flagVal: number;
    name(): "FORMER" | "LATTER" | "STANDARD_FORMER" | "STANDARD_LATTER" | "DAYLIGHT_FORMER" | "DAYLIGHT_LATTER";
}