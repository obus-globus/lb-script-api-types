import type { PropertyMap } from '../../../../../com/mojang/authlib/properties/PropertyMap.d.ts'
import type { ProfileAction } from '../../../../../com/mojang/authlib/yggdrasil/response/ProfileAction.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { UUID } from '../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class HasJoinedMinecraftServerResponse extends Record {
    constructor(id: UUID, properties: PropertyMap, profileActions: ProfileAction[])
    // private id: UUID;
    // private profileActions: ProfileAction[];
    // private properties: PropertyMap;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    id(): UUID;
    profileActions(): ProfileAction[];
    properties(): PropertyMap;
    toString(): string;
}