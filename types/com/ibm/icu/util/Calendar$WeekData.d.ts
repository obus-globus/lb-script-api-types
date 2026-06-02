import type { Object } from '../../../../java/lang/Object.d.ts'
export class Calendar$WeekData extends Object {
    constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number)
    firstDayOfWeek: number;
    minimalDaysInFirstWeek: number;
    weekendCease: number;
    weekendCeaseMillis: number;
    weekendOnset: number;
    weekendOnsetMillis: number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}