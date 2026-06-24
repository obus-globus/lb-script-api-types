import type { UpdateType } from '../../../../../com/mojang/authlib/yggdrasil/request/UpdateType.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { UUID } from '../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class FriendActionRequest extends Record {
    static byId(paramarg0: UUID, paramarg1: UpdateType): FriendActionRequest;
    static byName(paramarg0: string, paramarg1: UpdateType): FriendActionRequest;
    constructor(name: string, profileId: UUID, updateType: UpdateType)
    // private name: string;
    // private profileId: UUID;
    // private updateType: UpdateType;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    name(): string;
    profileId(): UUID;
    toString(): string;
    updateType(): UpdateType;
}