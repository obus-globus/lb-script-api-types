import type { ObjectInputStream } from '../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../java/io/ObjectOutputStream.d.ts'
import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { Instant } from '../../java/time/Instant.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Cloneable } from '../../java/lang/Cloneable.d.ts'
import type { Comparable } from '../../java/lang/Comparable.d.ts'
import type { BaseCalendar$Date } from '../../sun/util/calendar/BaseCalendar$Date.d.ts'
export class Date extends Object implements Serializable, Cloneable, Comparable<Date> {
    static UTC(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): number;
    static from(paramarg0: Instant): Date;
    static parse(paramarg0: string): number;
    constructor()
    constructor(arg0: number, arg1: number, arg2: number)
    constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number)
    constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number)
    constructor(arg0: number)
    constructor(arg0: string)
    // private cdate: BaseCalendar$Date;
    // private fastTime: number;
    after(arg0: Date): boolean;
    before(arg0: Date): boolean;
    clone(): Object;
    compareTo(arg0: Date): number;
    equals(arg0: Object | null): boolean;
    // private getCalendarDate(): BaseCalendar$Date;
    getDate(): number;
    getDay(): number;
    getHours(): number;
    getMinutes(): number;
    getMonth(): number;
    getSeconds(): number;
    getTime(): number;
    // private getTimeImpl(): number;
    getTimezoneOffset(): number;
    getYear(): number;
    hashCode(): number;
    // private normalize(): BaseCalendar$Date;
    // private normalize(arg0: BaseCalendar$Date): BaseCalendar$Date;
    // private readObject(arg0: ObjectInputStream): void;
    setDate(arg0: number): void;
    setHours(arg0: number): void;
    setMinutes(arg0: number): void;
    setMonth(arg0: number): void;
    setSeconds(arg0: number): void;
    setTime(arg0: number): void;
    setYear(arg0: number): void;
    toGMTString(): string;
    toInstant(): Instant;
    toLocaleString(): string;
    toString(): string;
    // private writeObject(arg0: ObjectOutputStream): void;
}