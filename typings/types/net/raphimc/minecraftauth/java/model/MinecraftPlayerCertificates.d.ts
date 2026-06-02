import type { JsonObject } from '../../../../../com/google/gson/JsonObject.d.ts'
import type { KeyPair } from '../../../../../java/security/KeyPair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
import type { GsonElement } from '../../../../../net/lenni0451/commons/gson/elements/GsonElement.d.ts'
import type { Expirable } from '../../../../../net/raphimc/minecraftauth/util/Expirable.d.ts'
export class MinecraftPlayerCertificates extends Object implements Expirable {
    static fromJson(paramarg0: JsonObject): MinecraftPlayerCertificates;
    static fromJson(paramarg0: Map$Entry<string, GsonElement>[]): MinecraftPlayerCertificates;
    static toJson(paramarg0: MinecraftPlayerCertificates): JsonObject;
    constructor(arg0: number, arg1: KeyPair, arg2: number[], arg3: number[])
    readonly expireTimeMs: number;
    readonly keyPair: KeyPair;
    readonly legacyPublicKeySignature: number[];
    readonly publicKeySignature: number[];
    equals(arg0: Object | null): boolean;
    getExpireTimeMs(): number;
    getKeyPair(): KeyPair;
    getLegacyPublicKeySignature(): number[];
    getPublicKeySignature(): number[];
    hashCode(): number;
    isExpired(): boolean;
    toString(): string;
}