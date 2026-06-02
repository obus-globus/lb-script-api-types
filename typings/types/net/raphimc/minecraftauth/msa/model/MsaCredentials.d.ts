import type { JsonObject } from '../../../../../com/google/gson/JsonObject.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
import type { GsonElement } from '../../../../../net/lenni0451/commons/gson/elements/GsonElement.d.ts'
export class MsaCredentials extends Object {
    static fromJson(paramarg0: JsonObject): MsaCredentials;
    static fromJson(paramarg0: Map$Entry<string, GsonElement>[]): MsaCredentials;
    static toJson(paramarg0: MsaCredentials): JsonObject;
    constructor(arg0: string, arg1: string)
    readonly email: string;
    readonly password: string;
    equals(arg0: Object | null): boolean;
    getEmail(): string;
    getPassword(): string;
    hashCode(): number;
    toString(): string;
}