import type { Record } from '../../java/lang/Record.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class CrashReportCategory$Entry extends Record {
    constructor(key: string, rawValue: Object)
    constructor(key: string, value: string)
    // private key: string;
    // private value: string;
    equals(o: Object | null): boolean;
    hashCode(): number;
    key(): string;
    toString(): string;
    value(): string;
}