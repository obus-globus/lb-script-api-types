import type { JsonObject } from '../../../../../com/google/gson/JsonObject.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
import type { GsonElement } from '../../../../../net/lenni0451/commons/gson/elements/GsonElement.d.ts'
import type { Expirable } from '../../../../../net/raphimc/minecraftauth/util/Expirable.d.ts'
export class PlayFabEntityToken extends Object implements Expirable {
    static fromApiJson(paramarg0: Map$Entry<string, GsonElement>[]): PlayFabEntityToken;
    static fromJson(paramarg0: JsonObject): PlayFabEntityToken;
    static fromJson(paramarg0: Map$Entry<string, GsonElement>[]): PlayFabEntityToken;
    static toJson(paramarg0: PlayFabEntityToken): JsonObject;
    constructor(arg0: number, arg1: string, arg2: string, arg3: string)
    readonly entityId: string;
    readonly entityType: string;
    readonly expireTimeMs: number;
    readonly token: string;
    equals(arg0: Object | null): boolean;
    getEntityId(): string;
    getEntityType(): string;
    getExpireTimeMs(): number;
    getToken(): string;
    hashCode(): number;
    isExpired(): boolean;
    toString(): string;
}