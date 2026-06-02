import type { RealmsServer } from '../../../../com/mojang/realmsclient/dto/RealmsServer.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RealmsDataFetcher$ServerListData extends Record {
    constructor(serverList: RealmsServer[], availableSnapshotServers: RealmsServer[])
    // private availableSnapshotServers: RealmsServer[];
    // private serverList: RealmsServer[];
    availableSnapshotServers(): RealmsServer[];
    equals(o: Object | null): boolean;
    hashCode(): number;
    serverList(): RealmsServer[];
    toString(): string;
}