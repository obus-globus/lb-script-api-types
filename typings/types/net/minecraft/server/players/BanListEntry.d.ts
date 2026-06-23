import type { JsonObject } from '../../../../com/google/gson/JsonObject.d.ts'
import type { SimpleDateFormat } from '../../../../java/text/SimpleDateFormat.d.ts'
import type { Date } from '../../../../java/util/Date.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { StoredUserEntry } from '../../../../net/minecraft/server/players/StoredUserEntry.d.ts'
export abstract class BanListEntry<T extends unknown> extends StoredUserEntry<T> {
    static DATE_FORMAT: SimpleDateFormat;
    static EXPIRES_NEVER: string;
    constructor(user: T, object: JsonObject)
    constructor(user: T, created: Date, source: string, expires: Date, reason: string)
    readonly created: Date;
    readonly expires: Date;
    readonly reason: string;
    readonly source: string;
    equals(o: Object | null): boolean;
    getCreated(): Date;
    getDisplayName(): Component;
    getExpires(): Date;
    getReason(): string;
    getReasonMessage(): Component;
    getSource(): string;
    hasExpired(): boolean;
    serialize(object: JsonObject): void;
}