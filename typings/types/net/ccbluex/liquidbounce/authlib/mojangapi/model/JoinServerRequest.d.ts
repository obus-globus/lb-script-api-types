import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JoinServerRequest extends Record {
    constructor(accessToken: string, selectedProfile: string, serverId: string)
    // private accessToken: string;
    /*not mapped: */ accessToken(): string;
    // private selectedProfile: string;
    /*not mapped: */ selectedProfile(): string;
    // private serverId: string;
    /*not mapped: */ serverId(): string;
    component1(): string;
    component2(): string;
    component3(): string;
    copy(accessToken: string, selectedProfile: string, serverId: string): JoinServerRequest;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}