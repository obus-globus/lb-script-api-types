import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { JsonObject } from '../../../../../com/google/gson/JsonObject.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
import type { GsonElement } from '../../../../../net/lenni0451/commons/gson/elements/GsonElement.d.ts'
import type { Expirable } from '../../../../../net/raphimc/minecraftauth/util/Expirable.d.ts'
export class XblUserProfile extends Object implements Expirable {
    static fromJson(paramarg0: JsonObject): XblUserProfile;
    static fromJson(paramarg0: Map$Entry<string, GsonElement>[]): XblUserProfile;
    static toJson(paramarg0: XblUserProfile): JsonObject;
    constructor(arg0: string, arg1: JavaMap<string, string>)
    readonly id: string;
    readonly settings: JavaMap<string, string>;
    equals(arg0: Object | null): boolean;
    getExpireTimeMs(): number;
    getId(): string;
    getSettings(): JavaMap<string, string>;
    hashCode(): number;
    isExpired(): boolean;
    toString(): string;
}