import type { Record } from '../../java/lang/Record.d.ts'
import type { StringBuilder } from '../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class ReportType extends Record {
    static CHUNK_IO_ERROR: ReportType;
    static CRASH: ReportType;
    static NETWORK_PROTOCOL_ERROR: ReportType;
    static PROFILE: ReportType;
    static TEST: ReportType;
    constructor(header: string, nuggets: string[])
    // private header: string;
    // private nuggets: string[];
    appendHeader(builder: StringBuilder, extraComments: string[]): void;
    equals(o: Object | null): boolean;
    getErrorComment(): string;
    hashCode(): number;
    header(): string;
    nuggets(): string[];
    toString(): string;
}