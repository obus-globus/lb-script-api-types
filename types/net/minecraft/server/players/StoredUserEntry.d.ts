import type { JsonObject } from '../../../../com/google/gson/JsonObject.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class StoredUserEntry<T extends Object | number | string | boolean> extends Object {
    constructor(user: T)
    readonly user: T;
    getUser(): T;
    hasExpired(): boolean;
    serialize(object: JsonObject): void;
}