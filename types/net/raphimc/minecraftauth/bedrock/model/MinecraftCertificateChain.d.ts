import type { JsonObject } from '../../../../../com/google/gson/JsonObject.d.ts'
import type { UUID } from '../../../../../java/util/UUID.d.ts'
import type { AtomicReference } from '../../../../../java/util/concurrent/atomic/AtomicReference.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
import type { GsonElement } from '../../../../../net/lenni0451/commons/gson/elements/GsonElement.d.ts'
import type { Expirable } from '../../../../../net/raphimc/minecraftauth/util/Expirable.d.ts'
import type { Jwt } from '../../../../../net/raphimc/minecraftauth/util/jwt/Jwt.d.ts'
export class MinecraftCertificateChain extends Object implements Expirable {
    static fromJson(paramarg0: JsonObject): MinecraftCertificateChain;
    static fromJson(paramarg0: Map$Entry<string, GsonElement>[]): MinecraftCertificateChain;
    static toJson(paramarg0: MinecraftCertificateChain): JsonObject;
    constructor(arg0: string, arg1: string)
    readonly identityJwt: string;
    readonly mojangJwt: string;
    readonly parsedIdentityJwt: AtomicReference<Object>;
    readonly parsedMojangJwt: AtomicReference<Object>;
    equals(arg0: Object | null): boolean;
    getExpireTimeMs(): number;
    getIdentityDisplayName(): string;
    getIdentityJwt(): string;
    getIdentityUuid(): UUID;
    getIdentityXuid(): string;
    getMojangJwt(): string;
    getParsedIdentityJwt(): Jwt;
    getParsedMojangJwt(): Jwt;
    hashCode(): number;
    isExpired(): boolean;
    toString(): string;
}