import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class RolloverFrequency extends Enum<RolloverFrequency> {
    static ANNUALLY: RolloverFrequency;
    static DAILY: RolloverFrequency;
    static EVERY_MILLISECOND: RolloverFrequency;
    static EVERY_MINUTE: RolloverFrequency;
    static EVERY_SECOND: RolloverFrequency;
    static HOURLY: RolloverFrequency;
    static MONTHLY: RolloverFrequency;
    static WEEKLY: RolloverFrequency;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): RolloverFrequency;
    static values(): (Object | null)[];
    private constructor()
    name(): "ANNUALLY" | "MONTHLY" | "WEEKLY" | "DAILY" | "HOURLY" | "EVERY_MINUTE" | "EVERY_SECOND" | "EVERY_MILLISECOND";
}