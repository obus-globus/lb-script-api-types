import type { AbuseReport } from '../../../../../../com/mojang/authlib/minecraft/report/AbuseReport.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { UUID } from '../../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ReportType } from '../../../../../../net/minecraft/client/multiplayer/chat/report/ReportType.d.ts'
export class Report$Result extends Record {
    constructor(id: UUID, reportType: ReportType, report: AbuseReport)
    // private id: UUID;
    // private report: AbuseReport;
    // private reportType: ReportType;
    equals(o: Object | null): boolean;
    hashCode(): number;
    id(): UUID;
    report(): AbuseReport;
    reportType(): ReportType;
    toString(): string;
}