import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { TemporalUnit } from '../../../../../java/time/temporal/TemporalUnit.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class PropertiesUtil$TimeUnit extends Enum<PropertiesUtil$TimeUnit> {
    static DAYS: PropertiesUtil$TimeUnit;
    static HOURS: PropertiesUtil$TimeUnit;
    static MICROS: PropertiesUtil$TimeUnit;
    static MILLIS: PropertiesUtil$TimeUnit;
    static MINUTES: PropertiesUtil$TimeUnit;
    static NANOS: PropertiesUtil$TimeUnit;
    static SECONDS: PropertiesUtil$TimeUnit;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): PropertiesUtil$TimeUnit;
    static values(): (Object | null)[];
    private constructor(descriptions: string[], timeUnit: TemporalUnit)
    // private descriptions: string[];
    // private timeUnit: TemporalUnit;
    name(): "NANOS" | "MICROS" | "MILLIS" | "SECONDS" | "MINUTES" | "HOURS" | "DAYS";
}