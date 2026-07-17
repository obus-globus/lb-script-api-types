import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { JsonObject } from '../../../../../com/google/gson/JsonObject.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
import type { GsonElement } from '../../../../../net/lenni0451/commons/gson/elements/GsonElement.d.ts'
import type { MsaEnvironment } from '../../../../../net/raphimc/minecraftauth/msa/data/MsaEnvironment.d.ts'
export class MsaApplicationConfig extends Object {
    static fromJson(paramarg0: JsonObject): MsaApplicationConfig;
    static fromJson(paramarg0: Map$Entry<string, GsonElement>[]): MsaApplicationConfig;
    static toJson(paramarg0: MsaApplicationConfig): JsonObject;
    constructor(arg0: string, arg1: string)
    constructor(arg0: string, arg1: string, arg2: string, arg3: string, arg4: MsaEnvironment)
    readonly clientId: string;
    readonly clientSecret: string;
    readonly environment: MsaEnvironment;
    readonly redirectUri: string;
    readonly scope: string;
    equals(arg0: Object | null): boolean;
    getAuthCodeParameters(): JavaMap<string, string>;
    getClientId(): string;
    getClientSecret(): string;
    getEnvironment(): MsaEnvironment;
    getRedirectUri(): string;
    getScope(): string;
    hashCode(): number;
    isTitleClientId(): boolean;
    toString(): string;
    withClientId(arg0: string): MsaApplicationConfig;
    withClientSecret(arg0: string): MsaApplicationConfig;
    withEnvironment(arg0: MsaEnvironment): MsaApplicationConfig;
    withRedirectUri(arg0: string): MsaApplicationConfig;
    withScope(arg0: string): MsaApplicationConfig;
}