import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class SpeedYawOffset$YawOffsetMode extends Enum<SpeedYawOffset$YawOffsetMode> implements Tagged {
    static AIR: SpeedYawOffset$YawOffsetMode;
    static CONSTANT: SpeedYawOffset$YawOffsetMode;
    static Companion: Tagged$Companion;
    static GROUND: SpeedYawOffset$YawOffsetMode;
    static getEntries(): SpeedYawOffset$YawOffsetMode[];
    static makeLookupTable<T extends Tagged>(self: T[]): { [key: string]: T };
    static of(self: string): Tagged;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): SpeedYawOffset$YawOffsetMode;
    static values(): SpeedYawOffset$YawOffsetMode[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "GROUND" | "AIR" | "CONSTANT";
}