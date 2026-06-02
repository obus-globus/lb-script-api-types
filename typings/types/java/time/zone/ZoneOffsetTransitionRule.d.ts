import type { DataOutput } from '../../../java/io/DataOutput.d.ts'
import type { ObjectInputStream } from '../../../java/io/ObjectInputStream.d.ts'
import type { Serializable } from '../../../java/io/Serializable.d.ts'
import type { DayOfWeek } from '../../../java/time/DayOfWeek.d.ts'
import type { LocalTime } from '../../../java/time/LocalTime.d.ts'
import type { Month } from '../../../java/time/Month.d.ts'
import type { ZoneOffset } from '../../../java/time/ZoneOffset.d.ts'
import type { ZoneOffsetTransition } from '../../../java/time/zone/ZoneOffsetTransition.d.ts'
import type { ZoneOffsetTransitionRule$TimeDefinition } from '../../../java/time/zone/ZoneOffsetTransitionRule$TimeDefinition.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ZoneOffsetTransitionRule extends Object implements Serializable {
    static of(paramarg0: Month, paramarg1: number, paramarg2: DayOfWeek, paramarg3: LocalTime, paramarg4: boolean, paramarg5: ZoneOffsetTransitionRule$TimeDefinition, paramarg6: ZoneOffset, paramarg7: ZoneOffset, paramarg8: ZoneOffset): ZoneOffsetTransitionRule;
    constructor(arg0: Month, arg1: number, arg2: DayOfWeek, arg3: LocalTime, arg4: boolean, arg5: ZoneOffsetTransitionRule$TimeDefinition, arg6: ZoneOffset, arg7: ZoneOffset, arg8: ZoneOffset)
    // private dom: number;
    // private dow: DayOfWeek;
    readonly month: Month;
    readonly offsetAfter: ZoneOffset;
    readonly offsetBefore: ZoneOffset;
    readonly standardOffset: ZoneOffset;
    // private time: LocalTime;
    readonly timeDefinition: ZoneOffsetTransitionRule$TimeDefinition;
    // private timeEndOfDay: boolean;
    createTransition(arg0: number): ZoneOffsetTransition;
    equals(arg0: Object | null): boolean;
    getDayOfMonthIndicator(): number;
    getDayOfWeek(): DayOfWeek;
    getLocalTime(): LocalTime;
    getMonth(): Month;
    getOffsetAfter(): ZoneOffset;
    getOffsetBefore(): ZoneOffset;
    getStandardOffset(): ZoneOffset;
    getTimeDefinition(): ZoneOffsetTransitionRule$TimeDefinition;
    hashCode(): number;
    isMidnightEndOfDay(): boolean;
    // private readObject(arg0: ObjectInputStream): void;
    toString(): string;
    writeExternal(arg0: DataOutput): void;
    // private writeReplace(): Object;
}