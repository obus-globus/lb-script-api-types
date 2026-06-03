import type { JsonObject } from '../../../../com/google/gson/JsonObject.d.ts'
import type { GameProfile } from '../../../../com/mojang/authlib/GameProfile.d.ts'
import type { NameAndId as NameAndId_2 } from '../../../../com/mojang/authlib/yggdrasil/response/NameAndId.d.ts'
import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { UUID } from '../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class NameAndId extends Record {
    static CODEC: Codec<NameAndId>;
    static createOffline(paramname: string): NameAndId;
    static fromJson(paramobject: JsonObject): NameAndId;
    constructor(profile: GameProfile)
    constructor(profile: NameAndId_2)
    constructor(id: UUID, name: string)
    // private id: UUID;
    // private name: string;
    appendTo(output: JsonObject): void;
    equals(o: Object | null): boolean;
    hashCode(): number;
    id(): UUID;
    name(): string;
    toString(): string;
}