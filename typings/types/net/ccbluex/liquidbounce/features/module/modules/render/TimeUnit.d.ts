import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class TimeUnit extends Enum<TimeUnit> implements Tagged {
    static Companion: Tagged$Companion;
    static SECONDS: TimeUnit;
    static TICKS: TimeUnit;
    static getEntries(): TimeUnit[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): TimeUnit;
    static values(): TimeUnit[];
    private constructor(tag: string)
    readonly tag: string;
    format(ticks: number): string;
    name(): "TICKS" | "SECONDS";
}