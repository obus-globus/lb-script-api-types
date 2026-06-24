import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { UUID } from '../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class FriendDto extends Record {
    constructor(profileId: UUID, name: string)
    // private name: string;
    // private profileId: UUID;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    name(): string;
    profileId(): UUID;
    toString(): string;
}