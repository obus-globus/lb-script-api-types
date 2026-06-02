import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DateTimeRule extends Object implements Serializable {
    static DOM: number;
    static DOW: number;
    static DOW_GEQ_DOM: number;
    static DOW_LEQ_DOM: number;
    static STANDARD_TIME: number;
    static UTC_TIME: number;
    static WALL_TIME: number;
    constructor(arg0: number, arg1: number, arg2: number, arg3: boolean, arg4: number, arg5: number)
    constructor(arg0: number, arg1: number, arg2: number, arg3: number)
    constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number)
    readonly dateRuleType: number;
    // private dayOfMonth: number;
    // private dayOfWeek: number;
    // private millisInDay: number;
    // private month: number;
    readonly timeRuleType: number;
    // private weekInMonth: number;
    getDateRuleType(): number;
    getRuleDayOfMonth(): number;
    getRuleDayOfWeek(): number;
    getRuleMillisInDay(): number;
    getRuleMonth(): number;
    getRuleWeekInMonth(): number;
    getTimeRuleType(): number;
    toString(): string;
}