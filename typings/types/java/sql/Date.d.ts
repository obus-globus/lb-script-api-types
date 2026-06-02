import type { Instant } from '../../java/time/Instant.d.ts'
import type { LocalDate } from '../../java/time/LocalDate.d.ts'
import type { Date } from '../../java/util/Date.d.ts'
export class Date extends Date {
    static UTC(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): number;
    static from(paramarg0: Instant): Date;
    static parse(paramarg0: string): number;
    static valueOf(paramarg0: string): Date;
    static valueOf(paramarg0: LocalDate): Date;
    constructor(arg0: number, arg1: number, arg2: number)
    constructor(arg0: number)
    getHours(): number;
    getMinutes(): number;
    getSeconds(): number;
    setHours(arg0: number): void;
    setMinutes(arg0: number): void;
    setSeconds(arg0: number): void;
    setTime(arg0: number): void;
    toInstant(): Instant;
    toLocalDate(): LocalDate;
    toString(): string;
}