import type { UUID } from '../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Session } from '../../../../../net/ccbluex/liquidbounce/authlib/compat/Session.d.ts'
export class GameProfile extends Object {
    constructor(username: string, uuid: UUID | null)
    readonly username: string;
    readonly uuid: UUID | null;
    component1(): string;
    component2(): UUID | null;
    copy(username: string, uuid: UUID | null): GameProfile;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toSession(token: string, type: string): Session;
    toString(): string;
}