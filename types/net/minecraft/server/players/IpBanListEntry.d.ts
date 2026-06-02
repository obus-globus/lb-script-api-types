import type { JsonObject } from '../../../../com/google/gson/JsonObject.d.ts'
import type { SimpleDateFormat } from '../../../../java/text/SimpleDateFormat.d.ts'
import type { Date } from '../../../../java/util/Date.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { BanListEntry } from '../../../../net/minecraft/server/players/BanListEntry.d.ts'
export class IpBanListEntry extends BanListEntry<string> {
    static DATE_FORMAT: SimpleDateFormat;
    static EXPIRES_NEVER: string;
    constructor(object: JsonObject)
    constructor(address: string)
    constructor(address: string, created: Date, source: string, expires: Date, reason: string)
    getDisplayName(): Component;
    serialize(object: JsonObject): void;
}