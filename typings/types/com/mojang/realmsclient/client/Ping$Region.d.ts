import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class Ping$Region extends Enum<Ping$Region> {
    static AP_NORTHEAST_1: Ping$Region;
    static AP_SOUTHEAST_1: Ping$Region;
    static AP_SOUTHEAST_2: Ping$Region;
    static EU_WEST_1: Ping$Region;
    static SA_EAST_1: Ping$Region;
    static US_EAST_1: Ping$Region;
    static US_WEST_1: Ping$Region;
    static US_WEST_2: Ping$Region;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): Ping$Region;
    static values(): Ping$Region[];
    private constructor(name: string, endpoint: string)
    // private endpoint: string;
    // private name: string;
    name(): "US_EAST_1" | "US_WEST_2" | "US_WEST_1" | "EU_WEST_1" | "AP_SOUTHEAST_1" | "AP_SOUTHEAST_2" | "AP_NORTHEAST_1" | "SA_EAST_1";
}