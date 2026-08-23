import type { JsonObject } from '../../../../../com/google/gson/JsonObject.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
import type { GsonElement } from '../../../../../net/lenni0451/commons/gson/elements/GsonElement.d.ts'
import type { Expirable } from '../../../../../net/raphimc/minecraftauth/util/Expirable.d.ts'
export class MinecraftEntitlements extends Object implements Expirable {
    static fromJson(paramarg0: JsonObject): MinecraftEntitlements;
    static fromJson(paramarg0: Map$Entry<string, GsonElement>[]): MinecraftEntitlements;
    static toJson(paramarg0: MinecraftEntitlements): JsonObject;
    constructor(arg0: string[])
    readonly items: string[];
    equals(arg0: Object | null): boolean;
    getExpireTimeMs(): number;
    getItems(): string[];
    hashCode(): number;
    isExpired(): boolean;
    toString(): string;
}