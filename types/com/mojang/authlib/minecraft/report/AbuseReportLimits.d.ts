import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AbuseReportLimits extends Record {
    static DEFAULTS: AbuseReportLimits;
    // private leadingContextMessageCount: number;
    // private maxEvidenceMessageCount: number;
    // private maxOpinionCommentsLength: number;
    // private maxReportedMessageCount: number;
    // private trailingContextMessageCount: number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    leadingContextMessageCount(): number;
    maxEvidenceMessageCount(): number;
    maxOpinionCommentsLength(): number;
    maxReportedMessageCount(): number;
    toString(): string;
    trailingContextMessageCount(): number;
}