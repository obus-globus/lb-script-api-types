import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class TimeUnit extends Object {
    static DAY: TimeUnit;
    static HOUR: TimeUnit;
    static MILLISECOND: TimeUnit;
    static MINUTE: TimeUnit;
    static MONTH: TimeUnit;
    static SECOND: TimeUnit;
    static WEEK: TimeUnit;
    static YEAR: TimeUnit;
    private constructor(name: string, ordinal: number)
    // private name: string;
    // private ordinal: number;
    larger(): TimeUnit;
    ordinal(): number;
    smaller(): TimeUnit;
    toString(): string;
}