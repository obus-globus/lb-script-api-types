import type { AbuseReportRequest$ClientInfo } from '../../../../../../com/mojang/authlib/yggdrasil/request/AbuseReportRequest$ClientInfo.d.ts'
import type { AbuseReportRequest$RealmInfo } from '../../../../../../com/mojang/authlib/yggdrasil/request/AbuseReportRequest$RealmInfo.d.ts'
import type { AbuseReportRequest$ThirdPartyServerInfo } from '../../../../../../com/mojang/authlib/yggdrasil/request/AbuseReportRequest$ThirdPartyServerInfo.d.ts'
import type { RealmsServer } from '../../../../../../com/mojang/realmsclient/dto/RealmsServer.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ReportEnvironment$Server } from '../../../../../../net/minecraft/client/multiplayer/chat/report/ReportEnvironment$Server.d.ts'
export class ReportEnvironment extends Record {
    static create(paramserver: ReportEnvironment$Server): ReportEnvironment;
    static local(): ReportEnvironment;
    static realm(paramrealm: RealmsServer): ReportEnvironment;
    static thirdParty(paramip: string): ReportEnvironment;
    constructor(clientVersion: string, server: ReportEnvironment$Server)
    // private clientVersion: string;
    // private server: ReportEnvironment$Server;
    clientInfo(): AbuseReportRequest$ClientInfo;
    clientVersion(): string;
    equals(o: Object | null): boolean;
    hashCode(): number;
    realmInfo(): AbuseReportRequest$RealmInfo;
    server(): ReportEnvironment$Server;
    thirdPartyServerInfo(): AbuseReportRequest$ThirdPartyServerInfo;
    toString(): string;
}