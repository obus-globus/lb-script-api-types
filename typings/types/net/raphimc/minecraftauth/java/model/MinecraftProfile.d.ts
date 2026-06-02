import type { JsonObject } from '../../../../../com/google/gson/JsonObject.d.ts'
import type { UUID } from '../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
import type { GsonElement } from '../../../../../net/lenni0451/commons/gson/elements/GsonElement.d.ts'
import type { Expirable } from '../../../../../net/raphimc/minecraftauth/util/Expirable.d.ts'
export class MinecraftProfile extends Object implements Expirable {
    static fromJson(paramarg0: JsonObject): MinecraftProfile;
    static fromJson(paramarg0: Map$Entry<string, GsonElement>[]): MinecraftProfile;
    static toJson(paramarg0: MinecraftProfile): JsonObject;
    constructor(arg0: UUID, arg1: string)
    readonly id: UUID;
    readonly name: string;
    equals(arg0: Object | null): boolean;
    getExpireTimeMs(): number;
    getId(): UUID;
    getName(): string;
    hashCode(): number;
    isExpired(): boolean;
    toString(): string;
}