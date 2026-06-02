import type { JsonObject } from '../../../../../com/google/gson/JsonObject.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
import type { GsonElement } from '../../../../../net/lenni0451/commons/gson/elements/GsonElement.d.ts'
import type { Expirable } from '../../../../../net/raphimc/minecraftauth/util/Expirable.d.ts'
export class XblTitleToken extends Object implements Expirable {
    static fromApiJson(paramarg0: Map$Entry<string, GsonElement>[]): XblTitleToken;
    static fromJson(paramarg0: JsonObject): XblTitleToken;
    static fromJson(paramarg0: Map$Entry<string, GsonElement>[]): XblTitleToken;
    static toJson(paramarg0: XblTitleToken): JsonObject;
    constructor(arg0: number, arg1: string, arg2: string)
    readonly expireTimeMs: number;
    readonly titleId: string;
    readonly token: string;
    equals(arg0: Object | null): boolean;
    getExpireTimeMs(): number;
    getTitleId(): string;
    getToken(): string;
    hashCode(): number;
    isExpired(): boolean;
    toString(): string;
}