import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { UUID } from '../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class JoinMinecraftServerRequest extends Record {
    constructor(accessToken: string, selectedProfile: UUID, serverId: string)
    // private accessToken: string;
    // private selectedProfile: UUID;
    // private serverId: string;
    accessToken(): string;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    selectedProfile(): UUID;
    serverId(): string;
    toString(): string;
}