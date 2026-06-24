import type { Record } from '../../../../java/lang/Record.d.ts'
import type { LocalDate } from '../../../../java/time/LocalDate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class EventLogDirectory$FileId extends Record {
    static parse(paramname: string): EventLogDirectory$FileId;
    constructor(date: LocalDate, index: number)
    // private date: LocalDate;
    // private index: number;
    date(): LocalDate;
    equals(o: Object | null): boolean;
    hashCode(): number;
    index(): number;
    toFileName(extension: string): string;
    toString(): string;
}