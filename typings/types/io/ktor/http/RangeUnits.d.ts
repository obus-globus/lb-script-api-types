import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class RangeUnits extends Enum<RangeUnits> {
    static Bytes: RangeUnits;
    static None: RangeUnits;
    static getEntries(): RangeUnits[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): RangeUnits;
    static values(): RangeUnits[];
    private constructor(unitToken: string)
    readonly unitToken: string;
    name(): "Bytes" | "None";
}