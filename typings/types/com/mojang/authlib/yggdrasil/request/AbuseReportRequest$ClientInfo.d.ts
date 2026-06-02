import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AbuseReportRequest$ClientInfo extends Record {
    constructor(clientVersion: string, locale: string)
    // private clientVersion: string;
    // private locale: string;
    clientVersion(): string;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    locale(): string;
    toString(): string;
}