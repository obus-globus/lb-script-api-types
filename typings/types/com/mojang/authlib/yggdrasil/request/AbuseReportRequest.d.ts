import type { AbuseReport } from '../../../../../com/mojang/authlib/minecraft/report/AbuseReport.d.ts'
import type { AbuseReportRequest$ClientInfo } from '../../../../../com/mojang/authlib/yggdrasil/request/AbuseReportRequest$ClientInfo.d.ts'
import type { AbuseReportRequest$RealmInfo } from '../../../../../com/mojang/authlib/yggdrasil/request/AbuseReportRequest$RealmInfo.d.ts'
import type { AbuseReportRequest$ThirdPartyServerInfo } from '../../../../../com/mojang/authlib/yggdrasil/request/AbuseReportRequest$ThirdPartyServerInfo.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { UUID } from '../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AbuseReportRequest extends Record {
    constructor(version: number, id: UUID, report: AbuseReport, clientInfo: AbuseReportRequest$ClientInfo, thirdPartyServerInfo: AbuseReportRequest$ThirdPartyServerInfo, realmInfo: AbuseReportRequest$RealmInfo, reportType: string)
    // private clientInfo: AbuseReportRequest$ClientInfo;
    // private id: UUID;
    // private realmInfo: AbuseReportRequest$RealmInfo;
    // private report: AbuseReport;
    // private reportType: string;
    // private thirdPartyServerInfo: AbuseReportRequest$ThirdPartyServerInfo;
    // private version: number;
    clientInfo(): AbuseReportRequest$ClientInfo;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    id(): UUID;
    realmInfo(): AbuseReportRequest$RealmInfo;
    report(): AbuseReport;
    reportType(): string;
    thirdPartyServerInfo(): AbuseReportRequest$ThirdPartyServerInfo;
    toString(): string;
    version(): number;
}