import type { JsonObject } from '../../../../../com/google/gson/JsonObject.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
import type { GsonElement } from '../../../../../net/lenni0451/commons/gson/elements/GsonElement.d.ts'
import type { Expirable } from '../../../../../net/raphimc/minecraftauth/util/Expirable.d.ts'
export class MsaDeviceCode extends Object implements Expirable {
    static fromJson(paramarg0: JsonObject): MsaDeviceCode;
    static fromJson(paramarg0: Map$Entry<string, GsonElement>[]): MsaDeviceCode;
    static toJson(paramarg0: MsaDeviceCode): JsonObject;
    constructor(arg0: number, arg1: number, arg2: string, arg3: string, arg4: string)
    readonly deviceCode: string;
    readonly expireTimeMs: number;
    readonly intervalMs: number;
    readonly userCode: string;
    readonly verificationUri: string;
    equals(arg0: Object | null): boolean;
    getDeviceCode(): string;
    getDirectVerificationUri(): string;
    getExpireTimeMs(): number;
    getIntervalMs(): number;
    getUserCode(): string;
    getVerificationUri(): string;
    hashCode(): number;
    isExpired(): boolean;
    toString(): string;
}