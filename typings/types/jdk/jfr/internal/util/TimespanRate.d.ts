import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class TimespanRate extends Record {
    static OFF: TimespanRate;
    static of(paramarg0: string): TimespanRate;
    static selectHigherResolution(paramarg0: TimespanRate, paramarg1: TimespanRate): TimespanRate;
    // private isRate: boolean;
    // private periodNanos: number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    isRate(): boolean;
    periodNanos(): number;
    rate(): number;
    // private toPeriodString(): string;
    // private toRateString(): string;
    toString(): string;
}