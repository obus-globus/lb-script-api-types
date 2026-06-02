import type { JsonObject } from '../../../../../com/google/gson/JsonObject.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
import type { GsonElement } from '../../../../../net/lenni0451/commons/gson/elements/GsonElement.d.ts'
import type { PlayFabEntityToken } from '../../../../../net/raphimc/minecraftauth/playfab/model/PlayFabEntityToken.d.ts'
import type { Expirable } from '../../../../../net/raphimc/minecraftauth/util/Expirable.d.ts'
export class PlayFabToken extends Object implements Expirable {
    static fromJson(paramarg0: JsonObject): PlayFabToken;
    static fromJson(paramarg0: Map$Entry<string, GsonElement>[]): PlayFabToken;
    static toJson(paramarg0: PlayFabToken): JsonObject;
    constructor(arg0: PlayFabEntityToken, arg1: string, arg2: string)
    readonly entityToken: PlayFabEntityToken;
    readonly playFabId: string;
    readonly sessionTicket: string;
    equals(arg0: Object | null): boolean;
    getEntityId(): string;
    getEntityToken(): PlayFabEntityToken;
    getExpireTimeMs(): number;
    getPlayFabId(): string;
    getSessionTicket(): string;
    hashCode(): number;
    isExpired(): boolean;
    toString(): string;
}