import type { Class } from '../../java/lang/Class.d.ts'
import type { Enum } from '../../java/lang/Enum.d.ts'
export class Locale$IsoCountryCode extends Enum<Locale$IsoCountryCode> {
    static PART1_ALPHA2: Locale$IsoCountryCode;
    static PART1_ALPHA3: Locale$IsoCountryCode;
    static PART3: Locale$IsoCountryCode;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): Locale$IsoCountryCode;
    static values(): Locale$IsoCountryCode[];
    private constructor()
    createCountryCodeSet(): string[];
    name(): "PART1_ALPHA2" | "PART1_ALPHA3" | "PART3";
}