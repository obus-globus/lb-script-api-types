import type { Instant } from '../../java/time/Instant.d.ts'
import type { LocalDateTime } from '../../java/time/LocalDateTime.d.ts'
import type { Date } from '../../java/util/Date.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class Timestamp extends Date {
    static UTC(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): number;
    static from(paramarg0: Instant): Timestamp;
    static from(paramarg0: Instant): Date;
    static parse(paramarg0: string): number;
    static valueOf(paramarg0: string): Timestamp;
    static valueOf(paramarg0: LocalDateTime): Timestamp;
    constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number)
    constructor(arg0: number)
    readonly nanos: number;
    after(arg0: Timestamp): boolean;
    after(arg0: Date): boolean;
    before(arg0: Timestamp): boolean;
    before(arg0: Date): boolean;
    compareTo(arg0: Timestamp): number;
    compareTo(arg0: Date): number;
    equals(arg0: Timestamp): boolean;
    equals(arg0: Object | null): boolean;
    getNanos(): number;
    getTime(): number;
    hashCode(): number;
    setNanos(arg0: number): void;
    setTime(arg0: number): void;
    toInstant(): Instant;
    toLocalDateTime(): LocalDateTime;
    toString(): string;
}