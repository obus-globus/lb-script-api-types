import type { JsonObject } from '../../../../../com/google/gson/JsonObject.d.ts'
import type { UUID } from '../../../../../java/util/UUID.d.ts'
import type { AtomicReference } from '../../../../../java/util/concurrent/atomic/AtomicReference.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
import type { GsonElement } from '../../../../../net/lenni0451/commons/gson/elements/GsonElement.d.ts'
import type { Expirable } from '../../../../../net/raphimc/minecraftauth/util/Expirable.d.ts'
import type { Jwt } from '../../../../../net/raphimc/minecraftauth/util/jwt/Jwt.d.ts'
export class MinecraftMultiplayerToken extends Object implements Expirable {
    static fromJson(paramarg0: JsonObject): MinecraftMultiplayerToken;
    static fromJson(paramarg0: Map$Entry<string, GsonElement>[]): MinecraftMultiplayerToken;
    static toJson(paramarg0: MinecraftMultiplayerToken): JsonObject;
    constructor(arg0: number, arg1: string)
    readonly expireTimeMs: number;
    readonly parsedToken: AtomicReference<Object>;
    readonly token: string;
    equals(arg0: Object | null): boolean;
    getDisplayName(): string;
    getExpireTimeMs(): number;
    getParsedToken(): Jwt;
    getToken(): string;
    getUuid(): UUID;
    getXuid(): string;
    hashCode(): number;
    isExpired(): boolean;
    toString(): string;
}