import type { CCServerInfo } from '../../../../../../de/florianreuth/classic4j/model/classicube/server/CCServerInfo.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class CCServerList extends Record {
    static fromJson(paramarg0: string): CCServerList;
    constructor(servers: CCServerInfo[])
    // private servers: CCServerInfo[];
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    servers(): CCServerInfo[];
    toString(): string;
}