import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class Calendar$WeekData extends Object {
    constructor(fdow: number, mdifw: number, weekendOnset: number, weekendOnsetMillis: number, weekendCease: number, weekendCeaseMillis: number)
    firstDayOfWeek: number;
    minimalDaysInFirstWeek: number;
    weekendCease: number;
    weekendCeaseMillis: number;
    weekendOnset: number;
    weekendOnsetMillis: number;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}