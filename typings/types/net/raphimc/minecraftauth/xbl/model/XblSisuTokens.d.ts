import type { JsonObject } from '../../../../../com/google/gson/JsonObject.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
import type { GsonElement } from '../../../../../net/lenni0451/commons/gson/elements/GsonElement.d.ts'
import type { XblTitleToken } from '../../../../../net/raphimc/minecraftauth/xbl/model/XblTitleToken.d.ts'
import type { XblUserToken } from '../../../../../net/raphimc/minecraftauth/xbl/model/XblUserToken.d.ts'
import type { XblXstsToken } from '../../../../../net/raphimc/minecraftauth/xbl/model/XblXstsToken.d.ts'
export class XblSisuTokens extends Object {
    static fromJson(paramarg0: JsonObject): XblSisuTokens;
    static fromJson(paramarg0: Map$Entry<string, GsonElement>[]): XblSisuTokens;
    static toJson(paramarg0: XblSisuTokens): JsonObject;
    constructor(arg0: XblUserToken, arg1: XblTitleToken, arg2: XblXstsToken)
    readonly titleToken: XblTitleToken;
    readonly userToken: XblUserToken;
    readonly xstsToken: XblXstsToken;
    equals(arg0: Object | null): boolean;
    getTitleToken(): XblTitleToken;
    getUserToken(): XblUserToken;
    getXstsToken(): XblXstsToken;
    hashCode(): number;
    toString(): string;
}