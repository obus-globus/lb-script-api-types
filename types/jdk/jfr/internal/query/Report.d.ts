import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Instant } from '../../../../java/time/Instant.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Report extends Record {
    static getReports(): Report[];
    constructor(name: string)
    // private name: string;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    name(): string;
    print(arg0: Instant, arg1: Instant): void;
    toString(): string;
}