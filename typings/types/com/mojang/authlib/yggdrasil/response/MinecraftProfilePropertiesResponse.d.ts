import type { GameProfile } from '../../../../../com/mojang/authlib/GameProfile.d.ts'
import type { PropertyMap } from '../../../../../com/mojang/authlib/properties/PropertyMap.d.ts'
import type { ProfileAction } from '../../../../../com/mojang/authlib/yggdrasil/response/ProfileAction.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { UUID } from '../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class MinecraftProfilePropertiesResponse extends Record {
    constructor(id: UUID, name: string, properties: PropertyMap, profileActions: ProfileAction[])
    // private id: UUID;
    // private name: string;
    // private profileActions: ProfileAction[];
    // private properties: PropertyMap;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    id(): UUID;
    name(): string;
    profile(): GameProfile;
    profileActions(): ProfileAction[];
    properties(): PropertyMap;
    toString(): string;
}