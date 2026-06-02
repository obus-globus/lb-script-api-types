import type { JsonObject } from '../../../../../../com/google/gson/JsonObject.d.ts'
import type { CookieStore } from '../../../../../../de/florianreuth/classic4j/util/CookieStore.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class CCAccount extends Object {
    static fromJson(paramarg0: JsonObject): CCAccount;
    constructor(arg0: string, arg1: string)
    constructor(arg0: string, arg1: string, arg2: string)
    cookieStore: CookieStore;
    // private password: string;
    token: string;
    // private username: string;
    asJson(): JsonObject;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    password(): string;
    toString(): string;
    token(): string;
    username(): string;
}