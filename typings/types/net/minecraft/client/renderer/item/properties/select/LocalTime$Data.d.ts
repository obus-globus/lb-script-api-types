import type { TimeZone } from '../../../../../../../com/ibm/icu/util/TimeZone.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class LocalTime$Data extends Record {
    private constructor(format: string, localeId: string, timeZone: Optional<TimeZone>)
    // private format: string;
    // private localeId: string;
    // private timeZone: Optional<TimeZone>;
    equals(o: Object | null): boolean;
    format(): string;
    hashCode(): number;
    localeId(): string;
    timeZone(): Optional<TimeZone>;
    toString(): string;
}