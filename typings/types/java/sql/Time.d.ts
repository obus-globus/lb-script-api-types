import type { Instant } from '../../java/time/Instant.d.ts'
import type { LocalTime } from '../../java/time/LocalTime.d.ts'
import type { Date } from '../../java/util/Date.d.ts'
export class Time extends Date {
    static UTC(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): number;
    static from(paramarg0: Instant): Date;
    static parse(paramarg0: string): number;
    static valueOf(paramarg0: string): Time;
    static valueOf(paramarg0: LocalTime): Time;
    constructor(arg0: number, arg1: number, arg2: number)
    constructor(arg0: number)
    getDate(): number;
    getDay(): number;
    getMonth(): number;
    getYear(): number;
    setDate(arg0: number): void;
    setMonth(arg0: number): void;
    setTime(arg0: number): void;
    setYear(arg0: number): void;
    toInstant(): Instant;
    toLocalTime(): LocalTime;
    toString(): string;
}